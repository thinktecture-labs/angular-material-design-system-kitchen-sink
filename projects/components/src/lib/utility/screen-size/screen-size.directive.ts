import { Breakpoints } from '@angular/cdk/layout';
import {ChangeDetectorRef, Directive, OnDestroy, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {Subject} from 'rxjs';
import {distinctUntilChanged, map, takeUntil} from 'rxjs/operators';
import {ScreenSizeService} from './screen-size.service';

@Directive()
export class AbstractScreenSizeDirective implements OnInit, OnDestroy {
  #destroy$$ = new Subject<void>();
  create?: boolean;

  constructor(private readonly sizes: string[],
              private readonly screenSizeService: ScreenSizeService,
              private readonly viewContainerRef: ViewContainerRef,
              private readonly templateRef: TemplateRef<any>,
              private readonly changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.screenSizeService.active$.pipe(
      takeUntil(this.#destroy$$),
      map(size => this.create === false && this.sizes.indexOf(size) === -1 ||
        this.create !== false && this.sizes.indexOf(size) !== -1),
      distinctUntilChanged(),
    ).subscribe(create => {
      this.updateView(create);
    });
  }

  ngOnDestroy(): void {
    this.#destroy$$.next(void 0);
  }

  private updateView(create: boolean) {
    if (create) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      this.changeDetectorRef.markForCheck();
    } else {
      this.viewContainerRef.clear();
    }
  }
}

@Directive({
  selector: '[labsScreenXSmall]',
  inputs: ['create: labsXScreenSmall'],
})
export class XSmallScreenSizeDirective extends AbstractScreenSizeDirective {
  constructor(screenSizeService: ScreenSizeService, viewContainerRef: ViewContainerRef, templateRef: TemplateRef<any>,
              changeDetectorRef: ChangeDetectorRef) {
    super([Breakpoints.XSmall], screenSizeService, viewContainerRef, templateRef, changeDetectorRef);
  }
}

@Directive({
  selector: '[labsScreenSmall]',
  inputs: ['create: labsScreenSmall'],
})
export class SmallScreenSizeDirective extends AbstractScreenSizeDirective {
  constructor(screenSizeService: ScreenSizeService, viewContainerRef: ViewContainerRef, templateRef: TemplateRef<any>,
              changeDetectorRef: ChangeDetectorRef) {
    super([Breakpoints.Small], screenSizeService, viewContainerRef, templateRef, changeDetectorRef);
  }
}

@Directive({
  selector: '[labsScreenMedium]',
  inputs: ['create: labsScreenMedium'],
})
export class MediumScreenSizeDirective extends AbstractScreenSizeDirective {
  constructor(screenSizeService: ScreenSizeService, viewContainerRef: ViewContainerRef, templateRef: TemplateRef<any>,
              changeDetectorRef: ChangeDetectorRef) {
    super([Breakpoints.Medium], screenSizeService, viewContainerRef, templateRef, changeDetectorRef);
  }
}

@Directive({
  selector: '[labsScreenLarge]',
  inputs: ['create: labsScreenLarge'],
})
export class LargeScreenSizeDirective extends AbstractScreenSizeDirective {
  constructor(screenSizeService: ScreenSizeService, viewContainerRef: ViewContainerRef, templateRef: TemplateRef<any>,
              changeDetectorRef: ChangeDetectorRef) {
    super([Breakpoints.Large], screenSizeService, viewContainerRef, templateRef, changeDetectorRef);
  }
}

@Directive({
  selector: '[labsScreenXLarge]',
  inputs: ['create: labsScreenXLarge'],
})
export class XLargeScreenSizeDirective extends AbstractScreenSizeDirective {
  constructor(screenSizeService: ScreenSizeService, viewContainerRef: ViewContainerRef, templateRef: TemplateRef<any>,
              changeDetectorRef: ChangeDetectorRef) {
    super([Breakpoints.XLarge], screenSizeService, viewContainerRef, templateRef, changeDetectorRef);
  }
}

@Directive({
  selector: '[labsScreenXSmallAndSmall]',
  inputs: ['create: labsScreenXSmallAndSmall'],
})
export class XSmallAndSmallScreenSizeDirective extends AbstractScreenSizeDirective {
  constructor(screenSizeService: ScreenSizeService, viewContainerRef: ViewContainerRef, templateRef: TemplateRef<any>,
              changeDetectorRef: ChangeDetectorRef) {
    super([Breakpoints.XSmall, Breakpoints.Small], screenSizeService, viewContainerRef, templateRef, changeDetectorRef);
  }
}

@Directive({
  selector: '[labsScreenMediumAndLarge]',
  inputs: ['create: labsScreenMediumAndLarge'],
})
export class MediumAndLargeScreenSizeDirective extends AbstractScreenSizeDirective {
  constructor(screenSizeService: ScreenSizeService, viewContainerRef: ViewContainerRef, templateRef: TemplateRef<any>,
              changeDetectorRef: ChangeDetectorRef) {
    super([Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge], screenSizeService, viewContainerRef, templateRef, changeDetectorRef);
  }
}
