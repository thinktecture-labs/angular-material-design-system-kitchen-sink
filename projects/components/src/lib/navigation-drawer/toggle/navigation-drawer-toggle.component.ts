import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'labs-navigation-drawer-toggle',
  templateUrl: 'navigation-drawer-toggle.component.html',
  styleUrls: ['navigation-drawer-toggle.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationDrawerToggleComponent {
  @HostBinding('class.collapsed')
  @Input() collapsed = false;
}
