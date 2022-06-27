import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, Input, TrackByFunction} from '@angular/core';
import {IconButtonComponent} from '../icon-button/icon-button.component';
import {BottomAppBarAction} from './bottom-app-bar-action';

@Component({
  selector: 'labs-bottom-app-bar',
  templateUrl: 'bottom-app-bar.component.html',
  styleUrls: ['bottom-app-bar.component.scss'],
  standalone: true,
  imports: [CommonModule, IconButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BottomAppBarComponent {
  @Input() actions?: BottomAppBarAction[];
  trackById: TrackByFunction<BottomAppBarAction> = (index, item) => item.id
}
