import {Component, Input} from '@angular/core';
import {IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {faRocket} from '@fortawesome/free-solid-svg-icons/faRocket';
import {faSmile} from '@fortawesome/free-solid-svg-icons/faSmile';
import {Icon} from './icon';

@Component({
  selector: 'labs-icon',
  templateUrl: 'icon.component.html',
  styleUrls: ['icon.component.scss'],
})
export class IconComponent implements Icon {
  @Input() icon: IconDefinition = faRocket;
}
