import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {CirclePlaceholderDirective} from './circle-placeholder.directive';
import {ContainerPlaceholderDirective} from './container-placeholder.directive';
import {TextPlaceholderDirective} from './text-placeholder.directive';

@NgModule({
  declarations: [
    TextPlaceholderDirective,
    CirclePlaceholderDirective,
    ContainerPlaceholderDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [TextPlaceholderDirective, CirclePlaceholderDirective, ContainerPlaceholderDirective]
})
export class PlaceholderModule {
}
