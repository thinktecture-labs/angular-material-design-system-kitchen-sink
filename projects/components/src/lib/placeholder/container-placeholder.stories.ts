import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {ContainerMockComponent} from './mock/container-mock.component';
import {ContainerMockModule} from './mock/container-mock.module';

export default {
  title: 'Components / Placeholder / Container',
  component: ContainerMockComponent,
  decorators: [
    moduleMetadata({
      imports: [ContainerMockModule]
    }),
  ],
} as Meta;

const Template: Story<ContainerMockComponent> = (props: ContainerMockComponent) => ({
  props: {value: props.value},
});

export const Default = Template.bind({});
Default.args = {
  value: undefined,
};
