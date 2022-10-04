import {Directive} from '@angular/core';
import {CdkCell, CdkCellDef, CdkHeaderCell, CdkHeaderCellDef} from "@angular/cdk/table";

@Directive({
  selector: '[labsCellDef]',
  providers: [{provide: CdkCellDef, useExisting: CellDefinitionDirective}],
})
export class CellDefinitionDirective extends CdkCellDef {


}

@Directive({
  selector: '[labsHeaderCellDef]',
  providers: [{provide: CdkHeaderCellDef, useExisting: HeaderCellDefinitionDirective}],
})
export class HeaderCellDefinitionDirective extends CdkHeaderCellDef {
}

@Directive({
  selector: 'labs-header-cell, th[labs-header-cell]',
  host: {
    'class': 'labs-header-cell',
    'role': 'columnheader',
  },
})
export class HeaderCellDirective extends CdkHeaderCell {
}

@Directive({
  selector: 'labs-cell, td[labs-cell]',
  host: {
    'class': 'labs-cell',
  },
})
export class CellDirective extends CdkCell {
}
