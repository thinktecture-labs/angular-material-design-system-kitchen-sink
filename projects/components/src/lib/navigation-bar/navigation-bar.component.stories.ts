import {Component} from '@angular/core';
import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {NavigationBarComponent} from './navigation-bar.component';


export default {
  title: 'Components / Navigation Bar',
  component: NavigationBarComponent,
} as Meta;

const Template: Story<NavigationBarComponent> = (props: NavigationBarComponent) => ({
  template: ``,
  props,
});

export const Default = Template.bind({});
Default.args = {};
