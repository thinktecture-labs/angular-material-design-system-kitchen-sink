import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {AvatarComponent} from './avatar.component';
import {AvatarModule} from './avatar.module';

export default {
  title: 'Components / Avatar',
  component: AvatarComponent,
  decorators: [
    moduleMetadata({imports: [AvatarModule]}),
  ],
} as Meta;

const Template: Story<AvatarComponent> = (props: AvatarComponent) => ({
  props: {url: props.url, size: props.size},
});

export const Default = Template.bind({});
Default.args = {url: 'sample-avatar.jpg', size: 'small'};
