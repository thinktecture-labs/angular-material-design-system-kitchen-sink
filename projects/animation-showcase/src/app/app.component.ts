import {Component, inject} from '@angular/core';
import {animate, animateChild, group, query, style, transition, trigger} from '@angular/animations';
import {ChildrenOutletContexts} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({position: 'relative'}),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            left: 0,
            width: '100%',
          }),
        ], {optional: true}),
        query(':enter', [
          style({transform: 'translateX(-100%)'}),
        ], {optional: true}),
        query(':leave', [animateChild()], {optional: true}),
        group([
          query(':leave', [
            animate('600ms ease-out', style({transform: 'translateX(100%)', opacity: 0})),
          ], {optional: true}),
          query(':enter', [
            animate('600ms ease-out', style({transform: 'translateX(0%)'})),
          ], {optional: true}),
          query('@*', [animateChild()], {optional: true}),
        ]),
      ]),

    ]),
  ],
})
export class AppComponent {
  title = 'animation-showcase';

  private readonly childOutletChontexts = inject(ChildrenOutletContexts)

  getRouteAnimationData(): string {
    return this.childOutletChontexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
