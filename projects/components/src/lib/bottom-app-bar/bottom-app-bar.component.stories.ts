import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';
import {faPlus} from '@fortawesome/free-solid-svg-icons/faPlus';
import {faSearch} from '@fortawesome/free-solid-svg-icons/faSearch';
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser';
import {Meta, Story} from '@storybook/angular';
import {BottomAppBarComponent} from './bottom-app-bar.component';

export default {
  title: 'Components / Bottom App Bar',
  component: BottomAppBarComponent,
  parameters: {layout: 'fullscreen'}
} as Meta;

const Template: Story<BottomAppBarComponent> = (props: BottomAppBarComponent) => ({
  props: {actions: props.actions, fabAction: props.fabAction},
});

export const Default = Template.bind({});
Default.args = {
  actions: [
    {id: 'drawer', icon: faBars, title: 'Drawer Toggle'},
    {id: 'search', icon: faSearch, title: 'Search'},
    {id: 'user', icon: faUser, title: 'User'}
  ],
  fabAction: {id: 'fab', icon: faPlus, title: 'Add new item'}
};


export const NoFab = Template.bind({});
NoFab.args = {
  actions: [
    {id: 'drawer', icon: faBars, title: 'Drawer Toggle'},
    {id: 'search', icon: faSearch, title: 'Search'},
    {id: 'user', icon: faUser, title: 'User'}
  ],
};
