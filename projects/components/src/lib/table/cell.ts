import {Directive} from '@angular/core';
import {CdkCellDef, CdkHeaderCellDef} from "@angular/cdk/table";

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
