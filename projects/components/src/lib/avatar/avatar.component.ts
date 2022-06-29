import {ChangeDetectionStrategy, Component, Input, OnChanges} from '@angular/core';
import {SimpleChanges} from '../model/simple-changes.type';

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

export class AvatarComponent implements OnChanges {
  @Input() size: 'small' | 'medium' | 'large' = 'small';
  @Input() url?: string;
  backgroundImageUrl?: string;

  ngOnChanges(changes: SimpleChanges<AvatarComponent>): void {
    if (changes.url) {
      this.backgroundImageUrl = !!changes.url.currentValue ? `url('${changes.url.currentValue}')` : undefined;
    }
  }
}
