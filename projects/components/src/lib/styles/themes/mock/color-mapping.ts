export interface Color {
  key: string,
  description?: string,
  value?: string,
}

export interface ColorGroup {
  key: string;
  colors: Color[];
}

export const GROUPS: ColorGroup[] = [
  {
    key: 'core',
    colors: [
      {key: '--md-sys-color-primary', description: 'The primary color.'},
      {
        key: '--color-on-primary',
        description: 'The content color that should be used for elements with primary color as background.'
      },
      {key: '--md-sys-color-background', description: 'The background color'},
      {
        key: '--md-sys-color-on-background',
        description: 'The content color that should be used for elements with background color as background'
      },
      {key: '--md-sys-color-surface', description: 'The background color for surfaces like cards.'},
      {key: '--md-sys-color-on-surface'},
    ]
  },
  {
    key: 'emphasis',
    colors: [
      {key: '--md-sys-color-emphasis-1'},
      {key: '--md-sys-color-emphasis-2'},
      {key: '--md-sys-color-emphasis-3'},
      {key: '--md-sys-color-emphasis-4'},
      {key: '--md-sys-color-emphasis-5'},
    ]
  },
  {
    key: 'elevation',
    colors: [
      {key: '--md-sys-color-highlight'},
    ]
  },
  {
    key: 'placeholder',
    colors: [
      {key: '--color-content-placeholder'},
      {key: '--color-content-placeholder-highlight'},
    ]
  },
  {
    key: 'outline',
    colors: [
      {key: '--md-sys-color-outline'},
      {key: '--md-sys-color-outline-focus'}
    ]
  }
]
