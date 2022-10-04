import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {TableComponent} from "./table.component";
import {TableModule} from "./table.module";
import {BehaviorSubject, Observable} from "rxjs";
import {CdkTableModule, DataSource} from "@angular/cdk/table";

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

class ExampleDataSource extends DataSource<PeriodicElement> {

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
      <ng-container labsColumnDef="position">
          <th labs-header-cell *labsHeaderCellDef> No. </th>
          <td labs-cell *labsCellDef="let element"> {{element.position}} </td>
      </ng-container>

      <ng-container labsColumnDef="name">
        <th labs-header-cell *labsHeaderCellDef> Name </th>
        <td labs-cell *labsCellDef="let element"> {{element.name}} </td>
      </ng-container>

      <ng-container labsColumnDef="weight">
        <th labs-header-cell *labsHeaderCellDef> Weight </th>
        <td labs-cell *labsCellDef="let element"> {{element.weight}} </td>
      </ng-container>

      <ng-container labsColumnDef="symbol">
        <th labs-header-cell *labsHeaderCellDef> Symbol </th>
        <td labs-cell *labsCellDef="let element"> {{element.symbol}} </td>
      </ng-container>

       <tr labs-header-row *labsHeaderRowDef="displayedColumns"></tr>
       <tr labs-row *labsRowDef="let row; columns: displayedColumns;"></tr>
  </labs-table>`,
  props: {dataSource: props.dataSource, displayedColumns: props.displayedColumns},
});

export const Default = Template.bind({});
Default.args = {
  dataSource: new ExampleDataSource(),
  displayedColumns: ['position', 'name', 'weight', 'symbol']
};

