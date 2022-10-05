import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {ChipComponent} from "./chip.component";
import {ChipModule} from "./chip.module";

export default {
  title: 'Components / Chip',
  component: ChipComponent,
  decorators: [
    moduleMetadata({imports: [ChipModule]}),
  ],
} as Meta;

interface ContentProjection {
  text: string;
}

const Template: Story<ChipComponent & ContentProjection> = (props: ChipComponent & ContentProjection) => ({
  template: '<labs-chip [type]="type">{{text}}</labs-chip>',
  props: {text: props.text, type: props.type},
});

export const Default = Template.bind({});
Default.args = {
  text: 'Filled chip'
};
export const Outlined = Template.bind({});
Outlined.args = {
  text: 'Outlined chip',
  type: 'outlined'
};
export const Elevated = Template.bind({});
Elevated.args = {
  text: 'Elevated Chip',
  type: 'elevated'
};
