import {Meta, Story} from '@storybook/angular';
import {NavigationDrawerToggleComponent} from './navigation-drawer-toggle.component';

export default {
  title: 'Components / Navigation Drawer / Toggle',
  component: NavigationDrawerToggleComponent,
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
