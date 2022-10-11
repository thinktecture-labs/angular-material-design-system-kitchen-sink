import {Meta, moduleMetadata, Story} from "@storybook/angular";
import {ScreenSizeModule} from "./screen-size.module";

export default {
  title: 'Core / Layout / Breakpoints',
  decorators: [moduleMetadata({
    imports: [ScreenSizeModule],
  })],
  parameters: {
    layout: 'centered'
  }
} as Meta;

const Template: Story<any> = (props) => ({
  styles: [':host { font-size: 14rem}'],
  template: `
        <div *labsScreenXSmallAndSmall>📱</div>
        <div *labsScreenMediumAndLarge>💻</div>
  `,
  props,
});

export const Directives = Template.bind({});
