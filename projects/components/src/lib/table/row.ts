import {Component, Directive, ViewEncapsulation} from '@angular/core';
import {CDK_ROW_TEMPLATE, CdkHeaderRow, CdkHeaderRowDef, CdkNoDataRow, CdkRow, CdkRowDef} from "@angular/cdk/table";

@Directive({
  selector: '[labsRowDef]',
  providers: [{provide: CdkRowDef, useExisting: RowDefinitionDirective}],
})
export class RowDefinitionDirective<T> extends CdkRowDef<T> {
}

@Directive({
  selector: '[labsHeaderRowDef]',
  providers: [{provide: CdkHeaderRowDef, useExisting: HeaderRowDefinitionDirective}],
})
export class HeaderRowDefinitionDirective<T> extends CdkHeaderRowDef {
}

@Component({
  selector: 'labs-header-row, tr[labs-header-row]',
  template: CDK_ROW_TEMPLATE,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'labsHeaderRow',
  providers: [{provide: CdkHeaderRow, useExisting: HeaderRowComponent}],
})
export class HeaderRowComponent extends CdkHeaderRow {
}

@Component({
  selector: 'labs-row, tr[labs-row]',
  template: CDK_ROW_TEMPLATE,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'labsRow',
  providers: [{provide: CdkRow, useExisting: RowComponent}],
})
export class RowComponent extends CdkRow {
}

@Directive({
  selector: 'ng-template[labsNoDataRow]',
  providers: [{provide: CdkNoDataRow, useExisting: NoDataRowComonent}],
})
export class NoDataRowComonent extends CdkNoDataRow {
  override _contentClassName = 'labs-mdc-no-data-row';
}
