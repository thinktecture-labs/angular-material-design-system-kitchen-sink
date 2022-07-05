import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {IconBarsComponent} from './components/icon-bars.component';
import {IconComponent} from './icon.component';

@NgModule({
  declarations: [IconComponent, IconBarsComponent],
  imports: [
    FontAwesomeModule,
    CommonModule
  ],
  exports: [IconComponent, IconBarsComponent, FontAwesomeModule]
})
export class IconsModule {
}
