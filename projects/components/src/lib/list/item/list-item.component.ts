import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'labs-list-item',
  templateUrl: 'list-item.component.html',
  styleUrls: ['list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListItemComponent {

}
