import {ChangeDetectionStrategy, Component, HostBinding, HostListener, Input} from '@angular/core';
import {NavigationDrawerService} from '../navigation-drawer.service';

@Component({
  selector: 'app-drawer-toggle',
  templateUrl: 'drawer-toggle.component.html',
  styleUrls: ['drawer-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrawerToggleComponent {
  @HostBinding('class.collapsed')
  @Input() collapsed = false;

  constructor(public readonly navigationDrawerService: NavigationDrawerService) {
  }

  @HostListener('click')
  public toggle(): void {
    this.navigationDrawerService.toggle();
  }
}
