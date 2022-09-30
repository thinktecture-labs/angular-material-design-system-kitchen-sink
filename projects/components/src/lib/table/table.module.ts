import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableComponent} from './table.component';
import {CellDefinitionDirective, HeaderCellDefinitionDirective} from "./cell";
import {HeaderRowDefinitionDirective, RowDefinitionDirective} from "./row";
import {ColumnDefinitionDirective} from "./column";
import {CdkTableModule} from "@angular/cdk/table";

const DECLARATIONS_AND_EXPORTS = [
  TableComponent,
  RowDefinitionDirective,
  ColumnDefinitionDirective,
  CellDefinitionDirective,
  HeaderCellDefinitionDirective,
  HeaderRowDefinitionDirective
]

@NgModule({
  declarations: DECLARATIONS_AND_EXPORTS,
  imports: [
    CommonModule,
    CdkTableModule
  ],
  exports: DECLARATIONS_AND_EXPORTS
})
export class TableModule {
}
