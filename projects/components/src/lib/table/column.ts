import {Directive, Input} from '@angular/core';
import {CdkColumnDef} from "@angular/cdk/table";

@Directive({
  selector: '[labsColumnDef]',
  providers: [
    {provide: CdkColumnDef, useExisting: ColumnDefinitionDirective},
  ],
})
export class ColumnDefinitionDirective extends CdkColumnDef {
  @Input('labsColumnDef')
  override get name(): string {
    return this._name;
  }

  override set name(name: string) {
    this._setNameInput(name);
  }

  protected override _updateColumnCssClassName() {
    super._updateColumnCssClassName();
    this._columnCssClassName!.push(`labs-column-${this.cssClassFriendlyName}`);
  }
}
