import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {ButtonComponent} from './button.component';
import {ButtonModule} from './button.module';

export default {
  title: 'Components / Buttons / Common',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({ imports: [ButtonModule]}),
  ],
} as Meta;

interface ContentProjection {
  text: string;
}

const Template: Story<ButtonComponent & ContentProjection> = (props: ButtonComponent & ContentProjection) => ({
  template: '<labs-button [disabled]="disabled" [type]="type">{{text}}</labs-button>',
  props: {disabled: props.disabled, text: props.text, type: props.type},
});

export const Text = Template.bind({});
Text.args = {
  disabled: false,
  text: 'Text Button',
  type: 'text'
};

export const Outlined = Template.bind({});
Outlined.args = {
  disabled: false,
  text: 'Outlined',
  type: 'outlined',
};

export const Filled = Template.bind({});
Filled.args = {
  disabled: false,
  text: 'Filled',
  type: 'filled',
};

export const Elevated = Template.bind({});
Elevated.args = {
  disabled: false,
  text: 'Elevated',
  type: 'elevated',
};
