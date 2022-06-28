import {animate, AnimationTriggerMetadata, state, style, transition, trigger} from '@angular/animations';
import {AnimationDirection} from './animation-direction';

export const SlideInOutAnimationFactory = (name: 'verticalSlideInOut' | 'horizontalSlideInOut' | unknown = 'horizontalSlideInOut', direction: AnimationDirection = 'X', distance = '0', duration = '.3s'): AnimationTriggerMetadata =>
  trigger(name, [
    state(
      '*',
      style({
        transform: `translate${direction}(0)`,
      }),
    ),
    state(
      'void',
      style({
        transform: `translate${direction}(${distance})`,
      }),
    ),
    transition('void <=> *', animate(`${duration} ease`)),
  ]);
