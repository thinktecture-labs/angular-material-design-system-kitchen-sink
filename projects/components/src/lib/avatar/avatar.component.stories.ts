import {Meta, Story} from '@storybook/angular';
import {AvatarComponent} from './avatar.component';

export default {
  title: 'Components / Avatar',
  component: AvatarComponent,
} as Meta;

const Template: Story<AvatarComponent> = (props: AvatarComponent) => ({
  props: {url: props.url, size: props.size},
});

export const Default = Template.bind({});
Default.args = {url: 'sample-avatar.jpg', size: 'small'};
