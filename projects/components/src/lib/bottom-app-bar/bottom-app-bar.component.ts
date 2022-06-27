import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {BottomAppBarAction} from './bottom-app-bar-action';

@Component({
  selector: 'labs-bottom-app-bar',
  templateUrl: 'bottom-app-bar.component.html',
  styleUrls: ['bottom-app-bar.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BottomAppBarComponent {
  @Input() actions: BottomAppBarAction[] = [];
}
