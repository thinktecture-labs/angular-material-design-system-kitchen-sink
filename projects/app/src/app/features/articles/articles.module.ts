import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ArticlesRoutingModule} from './articles-routing.module';
import {ArticlesComponent} from './articles/articles/articles.component';
import {ArticlesOverviewComponent} from './articles-overview/articles-overview.component';
import {TableModule} from "../../../../../components/src/lib/table/table.module";
import {ChipModule} from "../../../../../components/src/lib/chip/chip.module";


@NgModule({
  declarations: [
    ArticlesComponent,
    ArticlesOverviewComponent
  ],
  exports: [
    ArticlesOverviewComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    TableModule,
    ChipModule
  ]
})
export class ArticlesModule {
}
