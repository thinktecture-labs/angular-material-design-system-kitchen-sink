import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {AvatarModule} from '../avatar/avatar.module';
import {IconButtonModule} from '../icon-button/icon-button.module';

import {TopAppBarComponent} from './top-app-bar.component';

@NgModule({
  imports: [CommonModule, IconButtonModule, AvatarModule],
  exports: [TopAppBarComponent],
  declarations: [TopAppBarComponent],
  providers: [],
})
export class TopAppBarModule {
}
