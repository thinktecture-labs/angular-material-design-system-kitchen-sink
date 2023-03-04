import {Component} from '@angular/core';
import {NavigationDrawerService} from './navigation-drawer.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
  animations: [
    trigger('drawer', [
      state('closed', style({
        transform: 'translateX(-100%)',
        position: 'absolute',
      })),
      state('openedOverlay', style({
        transform: 'translateX(0)',
        position: 'absolute',
      })),
      transition('closed => openedOverlay', animate('0.3s ease-out')),
      transition('openedOverlay => closed', animate('0.15s ease-in')),
    ]),

  ],
})
export class DrawerComponent {

  constructor(public readonly navigationDrawerService: NavigationDrawerService) {
  }

  toggle(): void {
    this.navigationDrawerService.toggle();
  }


}
