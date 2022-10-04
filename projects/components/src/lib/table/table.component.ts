import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {
  _COALESCED_STYLE_SCHEDULER,
  _CoalescedStyleScheduler,
  CDK_TABLE,
  CDK_TABLE_TEMPLATE,
  CdkTable
} from "@angular/cdk/table";
import {_DisposeViewRepeaterStrategy, _VIEW_REPEATER_STRATEGY} from "@angular/cdk/collections";

@Component({
  selector: 'labs-table, table[labs-table]',
  template: CDK_TABLE_TEMPLATE,
  styleUrls: ['./table.component.scss'],
  providers: [
    {provide: CdkTable, useExisting: TableComponent},
    {provide: CDK_TABLE, useExisting: TableComponent},
    {provide: _VIEW_REPEATER_STRATEGY, useClass: _DisposeViewRepeaterStrategy},
    {provide: _COALESCED_STYLE_SCHEDULER, useClass: _CoalescedStyleScheduler},
  ],
  exportAs: 'labsTable',
  host: {
    'class': 'labs-table'
  },
  encapsulation: ViewEncapsulation.None,
})
export class TableComponent<T> extends CdkTable<T> implements OnInit {
}
