import {faPlus} from '@fortawesome/free-solid-svg-icons/faPlus';
import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {FabComponent} from './fab.component';
import {FabModule} from './fab.module';

export default {
  title: 'Components / Buttons / Fab',
  component: FabComponent,
  decorators: [
    moduleMetadata({imports: [FabModule]})
  ]
} as Meta;

const Template: Story<FabComponent> = (props: FabComponent) => ({
  props: {icon: props.icon, size: props.size},
});

export const Default = Template.bind({});
Default.args = {
  icon: faPlus
};

export const Small = Template.bind({});
Small.args = {
  icon: faPlus,
  size: 'small'
};
