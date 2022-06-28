import {Meta, Story} from '@storybook/angular';
import {NavigationDrawerComponent} from './navigation-drawer.component';

export default {
  title: 'Components / Navigation Drawer',
  component: NavigationDrawerComponent,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta;

const Template: Story<NavigationDrawerComponent> = (props: NavigationDrawerComponent) => ({
  props: {},
});

export const Default = Template.bind({});
Default.args = {};
