import {inject, Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {XSMALL_AND_SMALL_BREAKPOINTS} from '../utility/screen-size/screen-size';
import {ScreenSizeService} from '../utility/screen-size/screen-size.service';
import {NavigationItem} from './navigation-item';
import {NAVIGATION_ITEMS} from "../../../../app/src/app/app.module";

export enum DrawerState {
  closed = 'closed',
  opened = 'opened',
  openedOverlay = 'openedOverlay',
  collapsed = 'collapsed',
}

@Injectable({providedIn: 'root'})
export class NavigationDrawerService {
  private readonly navigationItems: NavigationItem[] = inject(NAVIGATION_ITEMS);

  protected state$$ = new BehaviorSubject<DrawerState>(DrawerState.opened);
  state$ = this.state$$.asObservable();

  items$ = new BehaviorSubject<NavigationItem[]>(this.navigationItems).asObservable()

  constructor(private readonly screenSizeService: ScreenSizeService) {
    screenSizeService.active$.subscribe((screenSize) => {
      if (XSMALL_AND_SMALL_BREAKPOINTS.includes(screenSize)) {
        this.state$$.next(DrawerState.closed);
      } else if (this.state$$.value === DrawerState.closed) {
        this.state$$.next(DrawerState.collapsed);
      }
    })
  }

  toggle(): void {
    if (this.state$$.value === DrawerState.collapsed) {
      this.state$$.next(DrawerState.opened);
    } else if (this.state$$.value === DrawerState.opened) {
      this.state$$.next(DrawerState.collapsed);
    } else if (this.state$$.value === DrawerState.openedOverlay) {
      this.state$$.next(DrawerState.closed);
    } else if (this.state$$.value === DrawerState.closed) {
      this.state$$.next(DrawerState.openedOverlay);
    }
  }
}
