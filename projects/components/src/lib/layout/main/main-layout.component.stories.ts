import {Meta, Story} from '@storybook/angular';
import {MainLayoutComponent} from './main-layout.component';

export default {
  title: 'Layouts / Main',
  component: MainLayoutComponent,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta;

const Template: Story<MainLayoutComponent> = (props: MainLayoutComponent) => ({
  props: {},
});

export const Default = Template.bind({});
Default.args = {};
