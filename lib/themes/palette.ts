import {elementPalette} from './elements/palette.ts';

export const palette = {
  primary: {
    light: '#4f46e5',
    dark: '#6366f1',
  },
  secondary: {
    light: '#db2777',
    dark: '#ec4899',
  },
  tertiary: {
    light: '#0891b2',
    dark: '#22d3ee',
  },
  error: {
    light: '#dc2626',
    dark: '#f87171',
  },
  warning: {
    light: '#b45309',
    dark: '#d97706',
  },
  success: {
    light: '#16a34a',
    dark: '#4ade80',
  },
  info: {
    light: '#2563eb',
    dark: '#60a5fa',
  },
  text: {
    primary: {
      light: '#18181b',
      dark: '#fafafa',
    },
    secondary: {
      light: '#52525b',
      dark: '#a1a1aa',
    },
    error: {
      light: '#dc2626',
      dark: '#f87171',
    },
    disabled: {
      light: '#a1a1aa',
      dark: '#52525b',
    },
  },
  background: {
    light: '#f4f4f5',
    dark: '#09090b',
  },
  surface: {
    light: '#ffffff',
    dark: '#18181b',
  },
  border: {
    light: '#e4e4e7',
    dark: '#27272a',
  },
  notification: {
    light: '#dc2626',
    dark: '#f87171',
  },
  white: {
    light: '#ffffff',
    dark: '#ffffff',
  },
  black: {
    light: '#000000',
    dark: '#000000',
  },
  ...elementPalette,
} as const;

export type Palette = typeof palette;
