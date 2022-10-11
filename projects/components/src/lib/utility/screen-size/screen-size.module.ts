import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {
  LargeScreenSizeDirective,
  MediumScreenSizeDirective,
  SmallScreenSizeDirective,
  XLargeScreenSizeDirective,
  MediumAndLargeScreenSizeDirective,
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
    MediumAndLargeScreenSizeDirective
  ],
  imports: [CommonModule],
  exports: [
    XSmallScreenSizeDirective,
    SmallScreenSizeDirective,
    MediumScreenSizeDirective,
    LargeScreenSizeDirective,
    XLargeScreenSizeDirective,
    XSmallAndSmallScreenSizeDirective,
    MediumAndLargeScreenSizeDirective
  ]
})
export class ScreenSizeModule {

}
