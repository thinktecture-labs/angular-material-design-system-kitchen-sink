import {NgModule} from '@angular/core';
import {IconsModule} from '../icons/icons.module';

import {IconButtonComponent} from './icon-button.component';

@NgModule({
  imports: [IconsModule],
  exports: [IconButtonComponent],
  declarations: [IconButtonComponent],
  providers: [],
})
export class IconButtonModule {
}
