import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TypographyComponent} from './typography.component';
import {TypographyCardModule} from "./typography-card/typography-card.module";

@NgModule({
  imports: [CommonModule, TypographyCardModule],
  declarations: [TypographyComponent],
  exports: [TypographyComponent],
})
export class TypographyModule {

}
