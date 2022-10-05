import {Component, Input} from '@angular/core';
import {ComponentStyle} from "../model/component-style.type";

@Component({
  selector: 'labs-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
  host: {
    '[class.type-outlined]': 'type === "outlined"',
    '[class.type-filled]': 'type === "filled" || type === "text"',
    '[class.type-elevated]': 'type === "elevated"',
  }
})
export class ChipComponent {

  @Input() disabled: boolean = false;
  @Input() type: ComponentStyle = 'filled';
}
