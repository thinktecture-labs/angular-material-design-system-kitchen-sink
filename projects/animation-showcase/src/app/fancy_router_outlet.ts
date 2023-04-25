import {
  ApplicationRef,
  ComponentRef,
  Directive,
  EnvironmentInjector,
  inject,
  Injectable,
  Injector,
  Input,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewContainerRef,
} from '@angular/core';

import {ActivatedRoute, ChildrenOutletContexts, Data, PRIMARY_OUTLET, RouterOutletContract} from '@angular/router';
import {delay, firstValueFrom, of} from 'rxjs';

@Directive({
  selector: 'fancy-router-outlet',
  exportAs: 'outlet',
  standalone: true,
})
export class FancyRouterOutlet
  implements OnDestroy, OnInit, RouterOutletContract {
  @Input() name = PRIMARY_OUTLET;

  private parentContexts = inject(ChildrenOutletContexts);
  private location = inject(ViewContainerRef);
  private environmentInjector = inject(EnvironmentInjector);
  private cdCoordinator = inject(ChangeDetectionCoordinator);
  private activated: ComponentRef<any> | null = null;
  private _activatedRoute: ActivatedRoute | null = null;

  get activatedRoute(): ActivatedRoute {
    if (!this.activated) throw new Error('Outlet is not activated');
    return this._activatedRoute as ActivatedRoute;
  }

  get isActivated(): boolean {
    return !!this.activated;
  }

  get component(): Object {
    if (!this.activated) throw new Error('Outlet is not activated');
    return this.activated.instance;
  }

  get activatedRouteData(): Data {
    return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes['name']) {
      return;
    }
    const {firstChange, previousValue} = changes['name'];
    if (firstChange) {
      // The first change is handled by ngOnInit. Because ngOnChanges doesn't get called when no
      // input is set at all, we need to centrally handle the first change there.
      return;
    }

    // unregister with the old name
    if (this.isTrackedInParentContexts(previousValue)) {
      this.deactivate();
      this.parentContexts.onChildOutletDestroyed(previousValue);
    }
    // register the new name
    this.initializeOutletWithName();
  }

  ngOnInit(): void {
    this.initializeOutletWithName();
  }

  ngOnDestroy(): void {
    // Ensure that the registered outlet is this one before removing it on the context.
    if (this.isTrackedInParentContexts(this.name)) {
      this.parentContexts.onChildOutletDestroyed(this.name);
    }
  }

  detach(): ComponentRef<any> {
    if (!this.activated) throw new Error('Outlet is not activated');
    this.startViewTransition(() => {
      this.location.detach();
    });
    const cmp = this.activated;
    this.activated = null;
    this._activatedRoute = null;
    return cmp;
  }

  attach(ref: ComponentRef<any>, activatedRoute: ActivatedRoute) {
    this.activated = ref;
    this._activatedRoute = activatedRoute;
    this.startViewTransition(() => {
      this.location.insert(ref.hostView);
    });
  }

  deactivate(): void {
    if (!this.activated) {
      return;
    }
    const activated = this.activated;
    const c = this.component;
    this.startViewTransition(() => {
      activated.destroy();
    });
    this.activated = null;
    this._activatedRoute = null;
  }

  activateWith(
    activatedRoute: ActivatedRoute,
    resolverOrInjector?: EnvironmentInjector | null | any,
  ) {
    if (this.isActivated) {
      throw new Error('Cannot activate an already activated outlet');
    }
    this._activatedRoute = activatedRoute;
    const location = this.location;
    const snapshot = activatedRoute.snapshot;
    const component = snapshot.component!;
    const childContexts = this.parentContexts.getOrCreateContext(
      this.name,
    ).children;
    const injector = Injector.create({
      providers: [
        {provide: ActivatedRoute, useValue: activatedRoute},
        {provide: ChildrenOutletContexts, useValue: childContexts},
      ],
      parent: location.injector,
    });

    const environmentInjector = resolverOrInjector ?? this.environmentInjector;
    this.startViewTransition(() => {
      this.activated = location.createComponent(component, {
        index: location.length,
        injector,
        environmentInjector,
      });
    });
  }

  private isTrackedInParentContexts(outletName: string) {
    return this.parentContexts.getContext(outletName)?.outlet === this;
  }

  private initializeOutletWithName() {
    this.parentContexts.onChildOutletCreated(this.name, this);
    if (this.activated) {
      return;
    }

    // If the outlet was not instantiated at the time the route got activated we need to populate
    // the outlet when it is initialized (ie inside a NgIf)
    const context = this.parentContexts.getContext(this.name);
    if (context?.route) {
      if (context.attachRef) {
        // `attachRef` is populated when there is an existing component to mount
        this.attach(context.attachRef, context.route);
      } else {
        // otherwise the component defined in the configuration is created
        this.activateWith(context.route, context.injector);
      }
    }
  }

  private startViewTransition(fn: Function) {
    if (!(document as any).startViewTransition) {
      fn();
    } else {
      (document as any).startViewTransition(async () => {
        fn();
        // Outlets need to wait for change detection to finish. There's no hook for this in Angular at the moment.
        await this.cdCoordinator.schedule();
      });
    }
  }
}

@Injectable({providedIn: 'root'})
export class ChangeDetectionCoordinator {
  private appRef = inject(ApplicationRef);
  private donePromise: Promise<void> | null = null;
  private resolveFn: (() => void) | null = null;

  // Coordinate a single change detection after 1 tick. Calling this multiple times synchronously will still result in a single change detection
  // This does actually still work with zoneless apps since we're not relying on ZoneJS here to perform the change detection.
  schedule() {
    if (this.donePromise) {
      return this.donePromise;
    }

    this.donePromise = new Promise((resolve) => {
      this.resolveFn = resolve;
    });

    firstValueFrom(of(null).pipe(delay(1))).then(() => {
      this.resolveFn?.();
      this.resolveFn = null;
      this.donePromise = null;
      this.appRef.tick();
    });

    return this.donePromise;
  }
}
