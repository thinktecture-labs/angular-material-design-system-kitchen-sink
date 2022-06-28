import {Breakpoints} from '@angular/cdk/layout';

export enum ScreenSize {
  XSmall = Breakpoints.XSmall,
  Small = Breakpoints.Small,
  Medium = Breakpoints.Medium,
  Large = Breakpoints.Large,
  XLarge = Breakpoints.XLarge,
}

export const ScreenSizes = [ScreenSize.XSmall, ScreenSize.Small, ScreenSize.Medium, ScreenSize.Large, ScreenSize.XLarge];
