import {animate, AnimationTriggerMetadata, state, style, transition, trigger} from '@angular/animations';
import {AnimationDirection} from './animation-direction';

export const ExpandCollapseAnimationFactory = (name: 'verticalExpandCollapse' | 'horizontalExpandCollapse' | any = 'verticalExpandCollapse', direction: AnimationDirection = 'Y', duration = '.3s'): AnimationTriggerMetadata =>
  trigger(name, [
    state(
      '*',
      style({
        [direction === 'Y' ? 'height' : 'width']: '*',
      }),
    ),
    state(
      'void',
      style({
        [direction === 'Y' ? 'height' : 'width']: 0,
      }),
    ),
    transition('void <=> *', animate(`${duration} ease`)),
  ]);
