import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {IconsModule} from '../icons/icons.module';

import {FabComponent} from './fab.component';

@NgModule({
  imports: [IconsModule, CommonModule],
  exports: [FabComponent],
  declarations: [FabComponent],
  providers: [],
})
export class FabModule {
}
