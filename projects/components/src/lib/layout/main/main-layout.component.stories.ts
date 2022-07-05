import {RouterModule} from '@angular/router';
import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {ContentPageMockComponent} from './content-page-mock/content-page-mock.component';
import {ContentPageMockModule} from './content-page-mock/content-page-mock.module';
import {MainLayoutComponent} from './main-layout.component';
import {MainLayoutModule} from './main-layout.module';

export default {
  title: 'Layouts / Main',
  component: MainLayoutComponent,
  parameters: {
    layout: 'fullscreen'
  },
  decorators: [
    moduleMetadata({
      imports: [
        MainLayoutModule,
        ContentPageMockModule,
        RouterModule.forRoot([
          {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
          {path: 'dashboard', component: ContentPageMockComponent},
          {path: 'tasks', component: ContentPageMockComponent},
          {path: 'reporting', component: ContentPageMockComponent},
          {path: 'settings', component: ContentPageMockComponent}
        ], {useHash: true})
      ]
    })
  ]
} as Meta;

const Template: Story<MainLayoutComponent> = (props: MainLayoutComponent) => ({
  props: {},
});

export const Default = Template.bind({});
Default.args = {};
