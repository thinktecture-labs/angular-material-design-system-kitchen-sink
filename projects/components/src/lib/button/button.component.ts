import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ComponentStyle} from "../model/component-style.type";

@Component({
  selector: 'labs-button',
  templateUrl: 'button.component.html',
  styleUrls: ['button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.type-text]': 'type === "text"',
    '[class.type-outlined]': 'type === "outlined"',
    '[class.type-filled]': 'type === "filled"',
    '[class.type-elevated]': 'type === "elevated"',
  }
})

export class ButtonComponent {

  @Input() disabled: boolean = false;
  @Input() type: ComponentStyle = 'text';

}
