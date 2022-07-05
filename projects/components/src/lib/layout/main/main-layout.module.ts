import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BottomAppBarModule} from '../../bottom-app-bar/bottom-app-bar.module';
import {LogoModule} from '../../logo/logo.module';
import {NavigationDrawerModule} from '../../navigation-drawer/navigation-drawer.module';
import {TopAppBarModule} from '../../top-app-bar/top-app-bar.module';
import {ScreenSizeModule} from '../../utility/screen-size/screen-size.module';

import {MainLayoutComponent} from './main-layout.component';

@NgModule({
  imports: [CommonModule, BottomAppBarModule, TopAppBarModule, ScreenSizeModule, NavigationDrawerModule, LogoModule, RouterModule],
  exports: [MainLayoutComponent],
  declarations: [MainLayoutComponent],
  providers: [],
})
export class MainLayoutModule {
}
