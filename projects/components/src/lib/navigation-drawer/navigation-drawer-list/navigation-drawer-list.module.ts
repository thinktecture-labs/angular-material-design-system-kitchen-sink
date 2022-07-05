import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {IconButtonModule} from '../../icon-button/icon-button.module';
import {IconsModule} from '../../icons/icons.module';
import {RippleModule} from '../../ripple/ripple.module';
import {NavigationDrawerListComponent} from './navigation-drawer-list.component';

@NgModule({
  declarations: [
    NavigationDrawerListComponent
  ],
  exports: [NavigationDrawerListComponent],
  imports: [CommonModule, IconsModule, RippleModule, IconButtonModule, RouterModule]
})
export class NavigationDrawerListModule {
}
