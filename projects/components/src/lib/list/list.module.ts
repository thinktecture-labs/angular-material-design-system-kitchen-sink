import {NgModule} from '@angular/core';
import {ListItemModule} from './item/list-item.module';

import {ListComponent} from './list.component';

@NgModule({
  imports: [ListItemModule],
  exports: [ListItemModule, ListComponent],
  declarations: [ListComponent],
  providers: [],
})
export class ListModule {
}
