import {CommonModule} from '@angular/common';
import {Component, Input, NgModule} from '@angular/core';
import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {PlaceholderModule} from './placeholder.module';

@Component({
  selector: 'labs-placeholder-container-mock',
  template: `
    <div [labsCirclePlaceholder]="value">{{value}}</div>
  `,
  styles: [`
    div {
      height: 4rem;
      width: 4rem;
    }

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
  title: 'Components / Placeholder / Circle',
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
