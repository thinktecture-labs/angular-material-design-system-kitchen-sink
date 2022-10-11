import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {BreakpointsComponent} from './breakpoints.component';
import {BreakpointsModule} from './breakpoints.module';

export default {
  title: 'Core / Layout / Breakpoints',
  component: BreakpointsComponent,
  decorators: [
    moduleMetadata({ imports: [BreakpointsModule]}),
  ],
} as Meta;

const Template: Story<BreakpointsComponent> = (args: BreakpointsComponent) => ({
  props: {},
});

export const CSS = Template.bind({});
CSS.args = {};
