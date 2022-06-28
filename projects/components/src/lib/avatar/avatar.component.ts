import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'labs-avatar',
  templateUrl: 'avatar.component.html',
  styleUrls: ['avatar.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.size-large]': 'size === "large"',
    '[class.size-medium]': 'size === "medium"',
    '[class.size-small]': 'size === "small"'
  }
})

export class AvatarComponent {
  @Input() size: 'small' | 'medium' | 'large' = 'small';
}
