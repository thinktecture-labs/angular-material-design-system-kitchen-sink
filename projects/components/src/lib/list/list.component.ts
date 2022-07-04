import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ListItemComponent} from './item/list-item.component';

@Component({
  selector: 'labs-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ListItemComponent],
})
export class ListComponent {

}
