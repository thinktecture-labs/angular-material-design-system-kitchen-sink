import {animate, state, style, transition, trigger} from '@angular/animations';
import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {faPlus} from '@fortawesome/free-solid-svg-icons/faPlus';
import {AvatarComponent} from '../avatar/avatar.component';
import {FabComponent} from '../fab/fab.component';
import {IconComponent} from '../icons/icon.component';
import {IconsModule} from '../icons/icons.module';
import {ListItemComponent} from '../list/item/list-item.component';
import {ListComponent} from '../list/list.component';
import {LogoComponent} from '../logo/logo.component';
import {RippleModule} from '../ripple/ripple.module';
import {ScreenSizeModule} from '../utility/screen-size/screen-size.module';
import {NavigationDrawerService} from './navigation-drawer.service';
import {NavigationItem} from './navigation-item';
import {NavigationDrawerToggleComponent} from './toggle/navigation-drawer-toggle.component';

@Component({
  selector: 'labs-navigation-drawer',
  templateUrl: 'navigation-drawer.component.html',
  styleUrls: ['navigation-drawer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('drawer', [
      state('closed', style({
        transform: 'translateX(-100%)',
        position: 'absolute',
      })),
      state('collapsed', style({
        transform: 'translateX(0)',
        width: '4.5rem',
        position: 'relative',
      })),
      state('opened', style({
        transform: 'translateX(0)',
        width: '22.5rem',
        position: 'relative',
      })),
      state('openedOverlay', style({
        transform: 'translateX(0)',
        width: 'min(22.5rem, 90vw)',
        position: 'absolute',
      })),
      transition('collapsed <=> closed', animate('.35s ease')),
      transition('openedOverlay <=> closed', animate('.35s ease')),
      transition('opened <=> closed', animate('.35s ease')),
      transition('collapsed <=> opened', animate('.35s ease')),
    ])
  ]
})
export class NavigationDrawerComponent {
  icon = faPlus;

  constructor(public readonly navigationDrawerService: NavigationDrawerService,) {
  }

  handleBackdropClick(): void {
    this.navigationDrawerService.toggle();
  }

  async navigate(item: NavigationItem): Promise<void> {
    await this.navigationDrawerService.activate(item);
  }
}
