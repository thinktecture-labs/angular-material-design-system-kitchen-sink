import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {IconsModule} from '../icons.module';
import {IconBarsComponent} from './icon-bars.component';

export default {
  title: 'Components / Icons / Bars',
  component: IconBarsComponent,
  decorators: [
    moduleMetadata({ imports: [IconsModule]}),
  ],
} as Meta;

const Template: Story<IconBarsComponent> = (props: IconBarsComponent) => ({
  props,
});

export const Default = Template.bind({});
Default.args = {};
