import {RouterModule} from '@angular/router';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';
import {faPlus} from '@fortawesome/free-solid-svg-icons/faPlus';
import {faSearch} from '@fortawesome/free-solid-svg-icons/faSearch';
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser';
import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {BottomAppBarComponent} from './bottom-app-bar.component';
import {BottomAppBarModule} from './bottom-app-bar.module';

export default {
  title: 'Components / Bars / Bottom App Bar',
  component: BottomAppBarComponent,
  parameters: {layout: 'fullscreen'},
  decorators: [
    moduleMetadata({imports: [BottomAppBarModule, RouterModule.forRoot([], {useHash: true})]}),
  ],
} as Meta;

const Template: Story<BottomAppBarComponent> = (props: BottomAppBarComponent) => ({
  props: {actions: props.actions, fabAction: props.fabAction},
});

export const Default = Template.bind({});
Default.args = {
  actions: [
    {id: 'search', icon: faSearch, title: 'Search'},
    {id: 'user', icon: faUser, title: 'User'}
  ],
  fabAction: {id: 'fab', icon: faPlus, title: 'Add new item'}
};


export const NoFab = Template.bind({});
NoFab.args = {
  actions: [
    {id: 'search', icon: faSearch, title: 'Search'},
    {id: 'user', icon: faUser, title: 'User'}
  ],
};
