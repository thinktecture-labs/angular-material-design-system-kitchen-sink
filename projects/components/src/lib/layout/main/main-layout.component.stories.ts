import {RouterModule} from '@angular/router';
import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {MainLayoutComponent} from './main-layout.component';
import {MainLayoutModule} from './main-layout.module';

export default {
  title: 'Layouts / Main',
  component: MainLayoutComponent,
  parameters: {
    layout: 'fullscreen'
  },
  decorators: [
    moduleMetadata({imports: [MainLayoutModule, RouterModule.forRoot([], {useHash: true})]})
  ]
} as Meta;

const Template: Story<MainLayoutComponent> = (props: MainLayoutComponent) => ({
  props: {},
});

export const Default = Template.bind({});
Default.args = {};
