import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutSampleComponent } from './layout-sample.component';

@NgModule({
  declarations: [
    LayoutSampleComponent
  ],
  exports: [LayoutSampleComponent],
  imports: [
    CommonModule
  ]
})
export class LayoutSampleModule { }
