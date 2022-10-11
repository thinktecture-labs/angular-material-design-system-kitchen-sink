import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BreakpointsComponent} from './breakpoints.component';

@NgModule({
  declarations: [BreakpointsComponent],
  exports: [BreakpointsComponent],
  imports: [CommonModule]
})
export class BreakpointsModule {
}
