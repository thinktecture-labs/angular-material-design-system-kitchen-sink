import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {AvatarModule} from '../avatar/avatar.module';
import {FabModule} from '../fab/fab.module';
import {IconButtonModule} from '../icon-button/icon-button.module';
import {NavigationDrawerToggleModule} from '../navigation-drawer/toggle/navigation-drawer-toggle.module';

import {BottomAppBarComponent} from './bottom-app-bar.component';

@NgModule({
  imports: [
    CommonModule,
    AvatarModule,
    IconButtonModule, FabModule, NavigationDrawerToggleModule
  ],
  exports: [BottomAppBarComponent],
  declarations: [BottomAppBarComponent],
  providers: [],
})
export class BottomAppBarModule {
}
