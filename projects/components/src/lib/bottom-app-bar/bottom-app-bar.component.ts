import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, Input, TrackByFunction} from '@angular/core';
import {EnterLeaveChildAnimationTrigger} from '../animations/enter-leave-child-animation-trigger';
import {SlideInOutAnimationFactory} from '../animations/slide-in-out.animation';
import {FabComponent} from '../fab/fab.component';
import {IconButtonComponent} from '../icon-button/icon-button.component';
import {AppBarAction} from '../model/bars/app-bar-action';

@Component({
  selector: 'labs-bottom-app-bar',
  templateUrl: 'bottom-app-bar.component.html',
  styleUrls: ['bottom-app-bar.component.scss'],
  standalone: true,
  imports: [CommonModule, IconButtonComponent, FabComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[@enterLeaveChildAnimationTrigger]': '',
    '[@verticalSlideInOut]': ''
  },
  animations: [EnterLeaveChildAnimationTrigger, SlideInOutAnimationFactory('verticalSlideInOut', 'Y', '100%', '.45s')]
})
export class BottomAppBarComponent {
  @Input() actions?: AppBarAction[];
  @Input() fabAction?: AppBarAction;
  trackById: TrackByFunction<AppBarAction> = (index, item) => item.id
}
