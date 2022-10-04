import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableComponent} from './table.component';
import {CellDefinitionDirective, CellDirective, HeaderCellDefinitionDirective, HeaderCellDirective} from "./cell";
import {
  HeaderRowComponent,
  HeaderRowDefinitionDirective,
  NoDataRowComonent,
  RowComponent,
  RowDefinitionDirective
} from "./row";
import {ColumnDefinitionDirective} from "./column";
import {CdkTableModule} from "@angular/cdk/table";

const DECLARATIONS_AND_EXPORTS = [
  TableComponent,
  CellDefinitionDirective,
  HeaderCellDefinitionDirective,
  HeaderCellDirective,
  CellDirective,
  ColumnDefinitionDirective,
  RowDefinitionDirective,
  HeaderRowDefinitionDirective,
  HeaderRowComponent,
  RowComponent,
  NoDataRowComonent
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
