import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {
  LargeScreenSizeDirective,
  MediumScreenSizeDirective,
  SmallScreenSizeDirective,
  XLargeScreenSizeDirective,
  XSmallAndSmallScreenSizeDirective,
  XSmallScreenSizeDirective
} from './screen-size.directive';

@NgModule({
  declarations: [
    XSmallScreenSizeDirective,
    SmallScreenSizeDirective,
    MediumScreenSizeDirective,
    LargeScreenSizeDirective,
    XLargeScreenSizeDirective,
    XSmallAndSmallScreenSizeDirective,
  ],
  imports: [CommonModule],
  exports: [
    XSmallScreenSizeDirective,
    SmallScreenSizeDirective,
    MediumScreenSizeDirective,
    LargeScreenSizeDirective,
    XLargeScreenSizeDirective,
    XSmallAndSmallScreenSizeDirective,
  ]
})
export class ScreenSizeModule {

}
