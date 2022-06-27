import {animate, AnimationTriggerMetadata, state, style, transition, trigger} from '@angular/animations';

export const ZoomInOutAnimationFactory = (): AnimationTriggerMetadata =>
  trigger('zoomInOut', [
    state(
      '*',
      style({
        transform: 'scale(1)',
      }),
    ),
    state(
      'void',
      style({
        transform: 'scale(0)',
      }),
    ),
    transition('void <=> *', animate('.3s ease')),
  ]);
