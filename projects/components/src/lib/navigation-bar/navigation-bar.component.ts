import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';

@Component({
  selector: 'labs-navigation-bar',
  templateUrl: 'navigation-bar.component.html',
  styleUrls: ['navigation-bar.component.scss'],
  imports: [FontAwesomeModule],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationBarComponent {
  drawerIcon = faBars;

}
