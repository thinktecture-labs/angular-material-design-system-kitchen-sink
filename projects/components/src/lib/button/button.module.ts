import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RippleModule} from '../ripple/ripple.module';

import {ButtonComponent} from './button.component';

@NgModule({
  imports: [
    RippleModule,
    CommonModule
  ],
  exports: [ButtonComponent],
  declarations: [ButtonComponent],
  providers: [],
})
export class ButtonModule {
}
