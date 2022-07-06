import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {CardAction} from "./card-action.interface";
import {ComponentStyle} from "../model/component-style.type";

@Component({
  selector: 'labs-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.type-outlined]': 'type === "outlined"',
    '[class.type-filled]': 'type === "filled"',
    '[class.type-elevated]': 'type === "elevated"',
  }
})
export class CardComponent implements OnInit {

  @Input() public title?: string;
  @Input() public subTitle?: string;
  @Input() public imageSrc?: string;
  @Input() public actions?: CardAction[];
  @Input() type: ComponentStyle = 'outlined';

  constructor() {
  }

  ngOnInit(): void {
  }

}
