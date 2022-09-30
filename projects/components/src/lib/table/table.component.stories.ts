import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {TableComponent} from "./table.component";
import {TableModule} from "./table.module";
import {CdkTableModule, DataSource} from "@angular/cdk/table";
import {BehaviorSubject, Observable} from "rxjs";

export default {
  title: 'Components / Table',
  component: TableComponent,
  decorators: [
    moduleMetadata({imports: [TableModule, CdkTableModule]}),
  ],
} as Meta;

interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

interface AdditionalInformation {
  displayedColumns: string[];
}

export class ExampleDataSource extends DataSource<PeriodicElement> {

  data = new BehaviorSubject<PeriodicElement[]>(ELEMENT_DATA);

  connect(): Observable<PeriodicElement[]> {
    return this.data;
  }

  disconnect() {
  }
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

const Template: Story<TableComponent<PeriodicElement> & AdditionalInformation> = (props: TableComponent<PeriodicElement> & AdditionalInformation) => ({
  template: `
    <labs-table [dataSource]="dataSource">
      <ng-container cdkColumnDef="position">
          <th cdk-header-cell *cdkHeaderCellDef> No. </th>
          <td cdk-cell *cdkCellDef="let element"> {{element.position}} </td>
      </ng-container>

      <ng-container cdkColumnDef="name">
        <th cdk-header-cell *cdkHeaderCellDef> Name </th>
        <td cdk-cell *cdkCellDef="let element"> {{element.name}} </td>
      </ng-container>

      <ng-container cdkColumnDef="weight">
        <th cdk-header-cell *cdkHeaderCellDef> Weight </th>
        <td cdk-cell *cdkCellDef="let element"> {{element.weight}} </td>
      </ng-container>

      <ng-container cdkColumnDef="symbol">
        <th cdk-header-cell *cdkHeaderCellDef> Symbol </th>
        <td cdk-cell *cdkCellDef="let element"> {{element.symbol}} </td>
      </ng-container>

       <tr cdk-header-row *cdkHeaderRowDef="displayedColumns"></tr>
       <tr cdk-row *cdkRowDef="let row; columns: displayedColumns;"></tr>
  </labs-table>`,
  props: {dataSource: props.dataSource, displayedColumns: props.displayedColumns},
});

export const Default = Template.bind({});
Default.args = {
  dataSource: new ExampleDataSource(),
  displayedColumns: ['position', 'name', 'weight', 'symbol']
};

