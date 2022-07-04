import {Meta, Story} from '@storybook/angular';
import {LogoComponent} from './logo.component';

export default {
  title: 'Components / Logo',
  component: LogoComponent,
} as Meta;

const Template: Story<LogoComponent> = (props: LogoComponent) => ({
  props,
});

export const Default = Template.bind({});
Default.args = {};
