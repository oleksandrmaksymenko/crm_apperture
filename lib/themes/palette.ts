import {deepOrange, green, grey} from './colors.ts';
import {elementPalette} from './elements/palette.ts';

export const palette: any = {
  primary: {
    light: green[300],
    dark: green[300],
  },
  secondary: {
    light: '#ff0080',
    dark: '#333',
  },
  tertiary: {
    light: '#333',
    dark: '#333',
  },
  default: {
    light: '#fff',
    dark: '#333',
  },
  error: {
    light: '#ff0000',
    dark: '#333',
  },
  warning: {
    light: '#ffcc00',
    dark: '#333',
  },
  success: {
    light: '#00cc00',
    dark: '#333',
  },
  info: {
    light: '#0088cc',
    dark: '#333',
  },
  text: {
    primary: {
      light: grey[900],
      dark: grey[200],
    },
    secondary: {
      light: '#666',
      dark: '#ccc',
    },
    tertiary: {
      light: '#999',
      dark: '#999',
    },
    default: {
      light: '#333',
      dark: '#fff',
    },
    error: {
      light: '#ff0000',
      dark: '#ff0000',
    },
    warning: {
      light: '#ffcc00',
      dark: '#ffcc00',
    },
    success: {
      light: '#00cc00',
      dark: '#00cc00',
    },
    info: {
      light: '#0088cc',
      dark: '#0088cc',
    },
    link: {
      light: '#007bff',
      dark: '#007bff',
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
    light: '#fff',
    dark: '#333',
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
