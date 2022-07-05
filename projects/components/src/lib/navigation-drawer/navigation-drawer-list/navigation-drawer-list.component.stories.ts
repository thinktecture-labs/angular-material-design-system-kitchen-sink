import {RouterModule} from '@angular/router';
import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {NavigationDrawerListComponent} from './navigation-drawer-list.component';
import {NavigationDrawerListModule} from './navigation-drawer-list.module';

export default {
  title: 'Components / Navigation Drawer / List',
  component: NavigationDrawerListComponent,
  decorators: [
    moduleMetadata({imports: [NavigationDrawerListModule, RouterModule.forRoot([], {useHash: true})]}),
  ],
} as Meta;

const Template: Story<NavigationDrawerListComponent> = (props: NavigationDrawerListComponent) => ({
  props,
});

export const Default = Template.bind({});
Default.args = {};
