import {Component} from '@angular/core';
import {NavigationDrawerService} from './navigation-drawer.service';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent {

  constructor(public readonly navigationDrawerService: NavigationDrawerService) {
  }

  toggle(): void {
    this.navigationDrawerService.toggle();
  }


}
