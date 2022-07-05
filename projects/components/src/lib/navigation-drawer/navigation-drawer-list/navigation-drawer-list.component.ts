import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ExpandCollapseAnimationFactory} from '../../animations/expand-collapse.animation';
import {NavigationDrawerService} from '../navigation-drawer.service';

@Component({
  selector: 'labs-navigation-drawer-list',
  templateUrl: './navigation-drawer-list.component.html',
  styleUrls: ['./navigation-drawer-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [ExpandCollapseAnimationFactory('horizontalExpandCollapse', 'X')]
})
export class NavigationDrawerListComponent {
  constructor(public readonly navigationDrawerService: NavigationDrawerService,) {
  }
}
