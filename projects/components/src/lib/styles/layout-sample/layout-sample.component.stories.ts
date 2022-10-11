import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {LayoutSampleComponent} from './layout-sample.component';
import {LayoutSampleModule} from './layout-sample.module';

export default {
  title: 'Core / Layout / Sizes',
  component: LayoutSampleComponent,
  decorators: [
    moduleMetadata({ imports: [LayoutSampleModule]}),
  ],
} as Meta;

const Template: Story<LayoutSampleComponent> = (args: LayoutSampleComponent) => ({
  props: {},
});

export const Default = Template.bind({});
Default.args = {};
