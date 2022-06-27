import {animate, animateChild, query, transition, trigger} from '@angular/animations';

export const EnterLeaveChildAnimationTrigger = trigger('enterLeaveChildAnimationTrigger', [
  transition(':leave', [animate('1ms ease'), query('*', [animateChild()], { optional: true })]),
  transition(':enter', [animate('1ms ease'), query('*', [animateChild()], { optional: true })]),
]);
