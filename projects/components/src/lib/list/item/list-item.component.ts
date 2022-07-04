import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ListItemIconDirective} from './icon/list-item-icon.directive';

@Component({
  selector: 'labs-list-item',
  templateUrl: 'list-item.component.html',
  styleUrls: ['list-item.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ListItemIconDirective]
})
export class ListItemComponent {

}
