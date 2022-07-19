import {NgModule} from '@angular/core';
import {PlaceholderModule} from '../placeholder.module';

import {ContainerMockComponent} from './container-mock.component';

@NgModule({
  imports: [PlaceholderModule],
  exports: [ContainerMockComponent],
  declarations: [ContainerMockComponent],
  providers: [],
})
export class ContainerMockModule {
}
