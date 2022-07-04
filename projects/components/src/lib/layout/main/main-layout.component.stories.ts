import {RouterModule} from '@angular/router';
import {Meta, Story} from '@storybook/angular';
import {MainLayoutComponent} from './main-layout.component';
import {ContentPageMockComponent} from './mock/content-page-mock.component';

export default {
  title: 'Layouts / Main',
  component: MainLayoutComponent,
  parameters: {
    layout: 'fullscreen'
  },
  imports: [ContentPageMockComponent, RouterModule.forRoot([{
    path: '',
    component: MainLayoutComponent,
    children: [
      {path: '', component: ContentPageMockComponent}
    ]
  }], {useHash: true})]
} as Meta;

const Template: Story<MainLayoutComponent> = (props: MainLayoutComponent) => ({
  props: {},
});

export const Default = Template.bind({});
Default.args = {};
