import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ContentPageMockComponent} from './content-page-mock.component';

@NgModule({
  declarations: [
    ContentPageMockComponent
  ],
  exports: [ContentPageMockComponent],
  imports: [
    CommonModule
  ]
})
export class ContentPageMockModule {
}
