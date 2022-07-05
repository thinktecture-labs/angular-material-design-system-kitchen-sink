import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {AvatarModule} from '../avatar/avatar.module';
import {FabModule} from '../fab/fab.module';
import {IconsModule} from '../icons/icons.module';
import {ListItemModule} from '../list/item/list-item.module';
import {ListModule} from '../list/list.module';
import {LogoModule} from '../logo/logo.module';
import {RippleModule} from '../ripple/ripple.module';
import {ScreenSizeModule} from '../utility/screen-size/screen-size.module';

import {NavigationDrawerComponent} from './navigation-drawer.component';
import {NavigationDrawerToggleModule} from './toggle/navigation-drawer-toggle.module';

@NgModule({
  imports: [CommonModule,
    ScreenSizeModule,
    IconsModule,
    RippleModule,
    NavigationDrawerToggleModule,
    FabModule,
    AvatarModule,
    LogoModule,
    ListModule,
    ListItemModule,
  ],
  exports: [NavigationDrawerComponent],
  declarations: [NavigationDrawerComponent],
  providers: [],
})
export class NavigationDrawerModule {
}
