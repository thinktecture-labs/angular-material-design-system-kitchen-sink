import {ChangeDetectionStrategy, Component} from '@angular/core';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';
import {Icon} from '../icon';

@Component({
  selector: 'labs-icon-bar',
  templateUrl: '../icon.component.html',
  styleUrls: ['../icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconBarsComponent implements Icon {
  readonly icon = faBars;
}
