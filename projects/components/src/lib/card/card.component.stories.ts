import {Meta, moduleMetadata, Story} from "@storybook/angular";
import {CardComponent} from "./card.component";
import {ButtonModule} from "../button/button.module";

interface ContentProjection {
  text: string;
}

const defaultArgs: Partial<CardComponent & ContentProjection> = {
  title: 'Main Title',
  subTitle: 'Subtitle',
  type: 'filled',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto expedita neque perferendis suscipit! Atque est eveniet fugiat nam rem, repellat suscipit? Autem distinctio illum iure quae velit voluptatem. Labore.\n',
};

export default {
  title: 'Components / Cards / Card',
  component: CardComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    actions: []
  },
  decorators: [
    moduleMetadata({
      imports: [ButtonModule]
    })
  ],
} as Meta;

const Template: Story<CardComponent & ContentProjection> = (props: CardComponent & ContentProjection) => ({
  template: '<labs-card style="width:300px" [title]="title" [subTitle]="subTitle" [imageSrc]="imageSrc" [actions]="actions" [type]="type">{{text}}</labs-card>',
  props: {
    title: props.title,
    subTitle: props.subTitle,
    imageSrc: props.imageSrc,
    actions: props.actions,
    type: props.type,
    text: props.text
  }
});

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs
}

export const WithImage = Template.bind({});
WithImage.args = {
  ...defaultArgs,
  imageSrc: 'https://cdn.pixabay.com/photo/2016/11/29/04/19/ocean-1867285_1280.jpg'
}

export const WithActions = Template.bind({});
WithActions.args = {
  ...defaultArgs,
  imageSrc: 'https://cdn.pixabay.com/photo/2016/11/29/04/19/ocean-1867285_1280.jpg',
  actions: [{title: 'Action', action: () => console.log("Action!")}]
}
