import {Meta, Story} from '@storybook/angular';
import {BottomAppBarComponent} from './bottom-app-bar.component';

export default {
  title: 'Components / Bottom App Bar',
  component: BottomAppBarComponent,
} as Meta;

const Template: Story<BottomAppBarComponent> = (props: BottomAppBarComponent) => ({
  props,
});

export const Default = Template.bind({});
Default.args = {};
