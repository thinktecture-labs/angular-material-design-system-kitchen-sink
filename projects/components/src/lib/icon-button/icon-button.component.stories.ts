import {faRocket} from '@fortawesome/free-solid-svg-icons/faRocket';
import {Meta, Story} from '@storybook/angular';
import {IconButtonComponent} from './icon-button.component';

export default {
  title: 'Components / Buttons / Icon',
  component: IconButtonComponent,
} as Meta;

const Template: Story<IconButtonComponent> = (props: IconButtonComponent) => ({
  props: {icon: props.icon},
});

export const Default = Template.bind({});
Default.args = {
  icon: faRocket,
};
