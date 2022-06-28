import {setCompodocJson} from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import {viewports} from './viewports';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {moduleMetadata} from "@storybook/angular";

setCompodocJson(docJson);

export const parameters = {
  actions: {argTypesRegex: "^on[A-Z].*"},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {inlineStories: true},
  themes: {
    default: 'light',
    list: [
      {name: 'light', class: 'labs-light-theme', color: 'white'},
      {name: 'dark', class: 'labs-dark-theme', color: 'black'}
    ]
  },
  backgrounds: {
    default: 'background',
    values: [
      {
        name: 'surface',
        value: 'var(--color-surface)',
      },
      {
        name: 'background',
        value: 'var(--color-background)',
      },
    ],
  },
  viewport: {
    viewports,
  },
}

export const decorators = [
  moduleMetadata({
    imports: [BrowserAnimationsModule],
  }),
];
