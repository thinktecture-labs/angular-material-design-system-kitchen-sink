import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CardAction} from "./card-action.interface";
import {ComponentStyle} from '../../../../../components/src/lib/model/component-style.type';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.type-outlined]': 'type === "outlined"',
    '[class.type-filled]': 'type === "filled"',
    '[class.type-elevated]': 'type === "elevated"',
  },
})
export class CardComponent {

  @Input() public title?: string;
  @Input() public subTitle?: string;
  @Input() public actions?: CardAction[];
  @Input() type: ComponentStyle = 'outlined';
  source = '';

  @Input() set imageSrc(src: string | undefined) {
    if (src) {

      this.source = `url(${src})`
      return;
    }
    this.source = ''
  }

}
