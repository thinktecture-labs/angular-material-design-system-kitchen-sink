import {faRocket} from '@fortawesome/free-solid-svg-icons/faRocket';
import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {IconButtonComponent} from './icon-button.component';
import {IconButtonModule} from './icon-button.module';

export default {
  title: 'Components / Buttons / Icon',
  component: IconButtonComponent,
  decorators: [
    moduleMetadata({imports: [IconButtonModule]}),
  ],
} as Meta;

const Template: Story<IconButtonComponent> = (props: IconButtonComponent) => ({
  props: {icon: props.icon},
});

export const Default = Template.bind({});
Default.args = {
  icon: faRocket,
};
