import {BreakpointObserver} from '@angular/cdk/layout';
import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, Subject, takeUntil} from 'rxjs';
import {ScreenSize, ScreenSizes} from './screen-size';

@Injectable({providedIn: 'root'})
export class ScreenSizeService implements OnDestroy {
  protected active$$ = new BehaviorSubject<ScreenSize>(ScreenSize.XLarge);
  active$ = this.active$$.asObservable();
  private readonly destroy$$ = new Subject<void>();

  constructor(private readonly breakpointObserver: BreakpointObserver,) {
    breakpointObserver.observe(ScreenSizes as string[])
      .pipe(takeUntil(this.destroy$$)).subscribe((result) => {
      Object.entries(result.breakpoints)
        .filter(([_, active]) => active)
        .forEach(([size, _]) => this.active$$.next(size as ScreenSize));
    });
  }

  ngOnDestroy(): void {
    this.destroy$$.next(void 0);
  }
}
