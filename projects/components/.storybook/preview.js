import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
  themes: {
    default: 'light',
    list: [
      { name: 'light', class: 'labs-light-theme', color: 'white'},
      { name: 'dark', class: 'labs-dark-theme', color: 'black'}
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
}
