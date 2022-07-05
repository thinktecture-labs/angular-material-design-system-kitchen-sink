import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';
import {faSearch} from '@fortawesome/free-solid-svg-icons/faSearch';
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser';
import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {TopAppBarComponent} from './top-app-bar.component';
import {TopAppBarModule} from './top-app-bar.module';

export default {
  title: 'Components / Bars /  Top App Bar',
  component: TopAppBarComponent,
  parameters: {
    layout: 'fullscreen'
  },
  decorators: [
    moduleMetadata({imports: [TopAppBarModule]})
  ]
} as Meta;

const Template: Story<TopAppBarComponent> = (props: TopAppBarComponent) => ({
  props: {actions: props.actions},
});

export const Default = Template.bind({});
Default.args = {
  actions: [
    {id: 'drawer', icon: faBars, title: 'Drawer Toggle'},
    {id: 'search', icon: faSearch, title: 'Search'},
    {id: 'user', icon: faUser, title: 'User'}
  ],
};
