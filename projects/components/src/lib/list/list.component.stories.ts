import {faRocket} from '@fortawesome/free-solid-svg-icons/faRocket';
import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {IconsModule} from '../icons/icons.module';
import {ListItemComponent} from './item/list-item.component';
import {ListComponent} from './list.component';

export default {
  title: 'Components / List',
  component: ListComponent,
  decorators: [
    moduleMetadata({
      imports: [ListItemComponent, IconsModule]
    })
  ]
} as Meta;

const Template: Story<ListComponent> = (props: ListComponent) => ({
  template: `<labs-list>
    <labs-list-item>List Item 1.</labs-list-item>
    <labs-list-item>List Item 2.</labs-list-item>
    <labs-list-item>List Item 3.</labs-list-item>
    <labs-list-item>List Item 4.</labs-list-item>
</labs-list>`,
  props,
});

export const Default = Template.bind({});
Default.args = {};

const TemplateWithIcons: Story<ListComponent> = (props: ListComponent) => ({
  template: `<labs-list>
    <labs-list-item><labs-icon [icon]="icon" labs-list-item-icon></labs-icon>List Item 1.</labs-list-item>
    <labs-list-item>List Item 2.</labs-list-item>
    <labs-list-item>List Item 3.</labs-list-item>
    <labs-list-item>List Item 4.</labs-list-item>
</labs-list>`,
  props,
});

export const WithIcons = TemplateWithIcons.bind({});
WithIcons.args = {
  icon: faRocket
};
