import {ChangeDetectionStrategy, Component, HostBinding, HostListener, Input} from '@angular/core';
import {NavigationDrawerService} from '../navigation-drawer.service';

@Component({
  selector: 'labs-navigation-drawer-toggle',
  templateUrl: 'navigation-drawer-toggle.component.html',
  styleUrls: ['navigation-drawer-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationDrawerToggleComponent {
  @HostBinding('class.collapsed')
  @Input() collapsed = false;

  constructor(public readonly navigationDrawerService: NavigationDrawerService,) {
  }

  @HostListener('click')
  public toggle(): void {
    this.navigationDrawerService.toggle();
  }
}
