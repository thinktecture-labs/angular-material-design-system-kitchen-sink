import {Meta, Story} from '@storybook/angular';
import {ListItemComponent} from './list-item.component';

export default {
  title: 'Components / List / Item',
  component: ListItemComponent,
} as Meta;

const Template: Story<ListItemComponent> = (props: ListItemComponent) => ({
  template: '<labs-list-item>List Item Content</labs-list-item>',
  props,
});

export const Default = Template.bind({});
Default.args = {};
