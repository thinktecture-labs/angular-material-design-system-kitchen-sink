import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, Input, TrackByFunction} from '@angular/core';
import {EnterLeaveChildAnimationTrigger} from '../animations/enter-leave-child-animation-trigger';
import {SlideInOutAnimationFactory} from '../animations/slide-in-out.animation';
import {IconButtonComponent} from '../icon-button/icon-button.component';
import {AppBarAction} from '../model/bars/app-bar-action';

@Component({
  selector: 'labs-top-app-bar',
  templateUrl: 'top-app-bar.component.html',
  styleUrls: ['top-app-bar.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, IconButtonComponent],
  host: {
    '[@enterLeaveChildAnimationTrigger]': '',
    '[@verticalSlideInOut]': ''
  },
  animations: [EnterLeaveChildAnimationTrigger, SlideInOutAnimationFactory('verticalSlideInOut', 'Y', '-100%', '.45s')]
})
export class TopAppBarComponent {
  @Input() actions?: AppBarAction[];
  trackById: TrackByFunction<AppBarAction> = (index, item) => item.id
}
