import {NgModule} from '@angular/core';
import {ListItemIconDirective} from './icon/list-item-icon.directive';

import {ListItemComponent} from './list-item.component';

@NgModule({
  imports: [],
  exports: [ListItemComponent, ListItemIconDirective],
  declarations: [ListItemComponent, ListItemIconDirective],
  providers: [],
})
export class ListItemModule {
}
