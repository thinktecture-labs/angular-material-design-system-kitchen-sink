import {ChangeDetectionStrategy, Component, Input, TrackByFunction} from '@angular/core';
import {EnterLeaveChildAnimationTrigger} from '../animations/enter-leave-child-animation-trigger';
import {ExpandCollapseAnimationFactory} from '../animations/expand-collapse.animation';
import {SlideInOutAnimationFactory} from '../animations/slide-in-out.animation';
import {AppBarAction} from '../model/bars/app-bar-action';

@Component({
  selector: 'labs-bottom-app-bar',
  templateUrl: 'bottom-app-bar.component.html',
  styleUrls: ['bottom-app-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[@enterLeaveChildAnimationTrigger]': '',
    '[@verticalExpandCollapse]': ''
  },
  animations: [
    EnterLeaveChildAnimationTrigger,
    SlideInOutAnimationFactory('verticalSlideInOut', 'Y', '100%', '.45s'),
    ExpandCollapseAnimationFactory()]
})
export class BottomAppBarComponent {
  @Input() actions?: AppBarAction[];
  @Input() fabAction?: AppBarAction;
  trackById: TrackByFunction<AppBarAction> = (index, item) => item.id
}
