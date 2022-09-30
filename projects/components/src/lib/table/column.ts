import {Directive} from '@angular/core';
import {CdkColumnDef} from "@angular/cdk/table";

@Directive({
  selector: '[labsColumnDef]',
  providers: [
    {provide: CdkColumnDef, useExisting: ColumnDefinitionDirective},
  ],
})
export class ColumnDefinitionDirective extends CdkColumnDef {
}
