import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {faPlus} from '@fortawesome/free-solid-svg-icons/faPlus';
import {faSearch} from '@fortawesome/free-solid-svg-icons/faSearch';
import {BottomAppBarComponent} from '../../bottom-app-bar/bottom-app-bar.component';
import {LogoComponent} from '../../logo/logo.component';
import {AppBarAction} from '../../model/bars/app-bar-action';
import {NavigationDrawerComponent} from '../../navigation-drawer/navigation-drawer.component';
import {TopAppBarComponent} from '../../top-app-bar/top-app-bar.component';
import {ScreenSizeModule} from '../../utility/screen-size/screen-size.module';

@Component({
  selector: 'labs-main-layout',
  templateUrl: 'main-layout.component.html',
  styleUrls: ['main-layout.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, BottomAppBarComponent, TopAppBarComponent, ScreenSizeModule, NavigationDrawerComponent, LogoComponent]
})

export class MainLayoutComponent {
  actions: AppBarAction[] = [
    {id: 'search', icon: faSearch, title: 'Search'},
  ];

  fabAction: AppBarAction = {id: 'fab', icon: faPlus, title: 'Add new item'};
}
