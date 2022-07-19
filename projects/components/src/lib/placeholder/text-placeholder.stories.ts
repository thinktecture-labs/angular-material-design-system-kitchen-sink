import {CommonModule} from '@angular/common';
import {Component, Input, NgModule} from '@angular/core';
import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {PlaceholderModule} from './placeholder.module';

@Component({
  selector: 'labs-placeholder-container-mock',
  template: `
    <div [labsTextPlaceholder]="value">{{value}}</div>
  `,
  styles: [`
    :host {
      display: flex;
      gap: var(--gap-l)
    }
  `]
})
class PlaceholderContainerMock {
  @Input() value?: string;
}

@NgModule({
  declarations: [PlaceholderContainerMock],
  imports: [PlaceholderModule, CommonModule],
  exports: [PlaceholderContainerMock]
})
class PlaceholderContainerMockModule {
}

export default {
  title: 'Components / Placeholder / Text',
  component: PlaceholderContainerMock,
  decorators: [
    moduleMetadata({
      imports: [PlaceholderContainerMockModule]
    }),
  ],
  parameters: {
    backgrounds: {default: 'surface'},
  },
} as Meta;

const Template: Story<PlaceholderContainerMock> = (props: PlaceholderContainerMock) => ({
  props: {value: props.value},
});

export const Default = Template.bind({});
Default.args = {
  value: undefined,
};
