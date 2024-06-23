import {deepOrange, green, indigo, lightGreen, teal, yellow} from './colors.ts';
import {elementPalette} from './elements/palette.ts';

export const palette: any = {
  primary: {
    light: teal[700],
    dark: green[300],
  },
  secondary: {
    light: '#ff0080',
    dark: '#ff0080',
  },
  tertiary: {
    light: indigo['A700'],
    dark: indigo[800],
  },
  default: {
    light: green[50],
    dark: lightGreen[50],
  },
  error: {
    light: deepOrange[700],
    dark: deepOrange[700],
  },
  warning: {
    light: yellow[800],
    dark: yellow[800],
  },
  success: {
    light: lightGreen[400],
    dark: lightGreen[400],
  },
  info: {
    light: teal[600],
    dark: teal[600],
  },
  text: {
    primary: {
      light: '#111827',
      dark: '#111827',
    },
    secondary: {
      light: '#fff',
      dark: '#111827',
    },
    tertiary: {
      light: '#fff',
      dark: '#fff',
    },
    default: {
      light: '#fff',
      dark: '#111827',
    },
    error: {
      light: '#fff',
      dark: '#111827',
    },
    warning: {
      light: '#fff',
      dark: '#111827',
    },
    success: {
      light: '#fff',
      dark: '#111827',
    },
    info: {
      light: '#fff',
      dark: '#fef',
    },
    link: {
      light: '#fff',
      dark: '#111827',
    },
    disabled: {
      light: '#999',
      dark: '#999',
    },
    placeholder: {
      light: '#999',
      dark: '#999',
    },
    icon: {
      light: '#333',
      dark: '#fff',
    },
    muted: {
      light: '#6c757d',
      dark: '#6c757d',
    },
  },
  background: {
    light: '#fdfdff',
    dark: '#111827',
  },
  border: {
    light: '#333',
    dark: '#ccc',
  },
  borderActive: {
    light: '#da0a0a',
    dark: '#499b88',
  },
  shadow: {
    light: '#ccc',
    dark: '#333',
  },
  link: {
    light: '#007bff',
    dark: '#333',
  },
  disabled: {
    light: '#ccc',
    dark: '#333',
  },
  placeholder: {
    light: '#999',
    dark: '#333',
  },
  icon: {
    light: '#333',
    dark: '#333',
  },
  divider: {
    light: '#ccc',
    dark: '#333',
  },
  focus: {
    light: '#007bff',
    dark: '#333',
  },
  hover: {
    light: '#f8f9fa',
    dark: '#333',
  },
  active: {
    light: '#e9ecef',
    dark: '#333',
  },
  selected: {
    light: '#007bff',
    dark: '#333',
  },
  visited: {
    light: '#6610f2',
    dark: '#333',
  },
  muted: {
    light: '#6c757d',
    dark: '#333',
  },
  accent: {
    light: '#007bff',
    dark: '#333',
  },
  popupBackground: {
    light: 'rgba(0,0,0,0.5)',
    dark: 'rgba(0,0,0,0.5)',
  },
  notification: {
    light: deepOrange[800],
    dark: deepOrange[800],
  },
  white: {
    light: '#fff',
    dark: '#fff',
  },
  black: {
    light: '#000',
    dark: '#000',
  },
  ...elementPalette,
};
