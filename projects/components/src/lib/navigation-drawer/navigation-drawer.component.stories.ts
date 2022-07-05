import {RouterModule} from '@angular/router';
import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {NavigationDrawerComponent} from './navigation-drawer.component';
import {NavigationDrawerModule} from './navigation-drawer.module';

export default {
  title: 'Components / Navigation Drawer',
  component: NavigationDrawerComponent,
  parameters: {
    layout: 'fullscreen'
  },
  decorators: [
    moduleMetadata({imports: [RouterModule.forRoot([], {useHash: true}), NavigationDrawerModule]})
  ]
} as Meta;

const Template: Story<NavigationDrawerComponent> = (props: NavigationDrawerComponent) => ({
  props: {},
});

export const Default = Template.bind({});
Default.args = {};
