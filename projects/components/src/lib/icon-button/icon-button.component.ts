import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {IconsModule} from '../icons/icons.module';

@Component({
  selector: 'labs-icon-button',
  templateUrl: 'icon-button.component.html',
  standalone: true,
  imports: [IconsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconButtonComponent {
  @Input() icon: IconDefinition;
}
