import {Meta, Story} from '@storybook/angular';
import {AvatarComponent} from './avatar.component';

export default {
  title: 'Components / Avatar',
  component: AvatarComponent,
} as Meta;

const Template: Story<AvatarComponent> = (props: AvatarComponent) => ({
  props,
});

export const Default = Template.bind({});
Default.args = {};
