import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {XSmallAndSmallScreenSizes} from '../utility/screen-size/screen-size';
import {ScreenSizeService} from '../utility/screen-size/screen-size.service';

export enum DrawerState {
  closed = 'closed',
  opened = 'opened',
  openedOverlay = 'openedOverlay',
  collapsed = 'collapsed',
}

@Injectable({providedIn: 'root'})
export class NavigationDrawerService {
  protected state$$ = new BehaviorSubject<DrawerState>(DrawerState.opened);
  state$ = this.state$$.asObservable();

  constructor(private readonly screenSizeService: ScreenSizeService,) {
    screenSizeService.active$.subscribe((screenSize) => {
      if (XSmallAndSmallScreenSizes.includes(screenSize)) {
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
