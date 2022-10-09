export interface Color {
  key: string,
  description?: string,
  value?: string,
  background?: string;
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
    key: 'emphasis (surface)',
    colors: [
      {key: '--md-sys-color-surface-emphasis-0'},
      {key: '--md-sys-color-surface-emphasis-1'},
      {key: '--md-sys-color-surface-emphasis-2'},
      {key: '--md-sys-color-surface-emphasis-3'},
      {key: '--md-sys-color-surface-emphasis-4'},
      {key: '--md-sys-color-surface-emphasis-5'},
    ]
  },
  {
    key: 'emphasis (primary)',
    colors: [
      {key: '--md-sys-color-primary-emphasis-0', background: 'var(--md-sys-color-primary'},
      {key: '--md-sys-color-primary-emphasis-1', background: 'var(--md-sys-color-primary'},
      {key: '--md-sys-color-primary-emphasis-2', background: 'var(--md-sys-color-primary'},
      {key: '--md-sys-color-primary-emphasis-3', background: 'var(--md-sys-color-primary'},
      {key: '--md-sys-color-primary-emphasis-4', background: 'var(--md-sys-color-primary'},
      {key: '--md-sys-color-primary-emphasis-5', background: 'var(--md-sys-color-primary'},
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
