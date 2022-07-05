import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {LogoComponent} from './logo.component';
import {LogoModule} from './logo.module';

export default {
  title: 'Components / Logo',
  component: LogoComponent,
  decorators: [
    moduleMetadata({imports: [LogoModule]})
  ]
} as Meta;

const Template: Story<LogoComponent> = (props: LogoComponent) => ({
  props,
});

export const Default = Template.bind({});
Default.args = {};
