import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FabComponent} from '../fab/fab.component';
import {NavigationDrawerToggleComponent} from './toggle/navigation-drawer-toggle.component';

@Component({
  selector: 'labs-navigation-drawer',
  templateUrl: 'navigation-drawer.component.html',
  styleUrls: ['navigation-drawer.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NavigationDrawerToggleComponent, FabComponent]
})
export class NavigationDrawerComponent {

}
