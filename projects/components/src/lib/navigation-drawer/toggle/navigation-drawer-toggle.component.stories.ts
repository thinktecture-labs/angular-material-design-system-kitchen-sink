import {RouterModule} from '@angular/router';
import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {NavigationDrawerToggleComponent} from './navigation-drawer-toggle.component';
import {NavigationDrawerToggleModule} from './navigation-drawer-toggle.module';

export default {
  title: 'Components / Navigation Drawer / Toggle',
  component: NavigationDrawerToggleComponent,
  decorators: [
    moduleMetadata({imports: [NavigationDrawerToggleModule, RouterModule.forRoot([], {useHash: true})]})
  ]
} as Meta;

const Template: Story<NavigationDrawerToggleComponent> = (props: NavigationDrawerToggleComponent) => ({
  props: {collapsed: props.collapsed},
});

export const Default = Template.bind({});
Default.args = {};


export const Collapsed = Template.bind({});
Collapsed.args = {
  collapsed: true
};
