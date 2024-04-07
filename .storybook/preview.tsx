import {withThemeFromJSXProvider} from '@storybook/addon-themes';
import {Global, css, ThemeProvider} from '@emotion/react';

import {lightTheme, darkTheme} from '../lib/themes';

const GlobalStyles = () => (
  <Global
    styles={css`
      body {
        font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial,
          sans-serif;
      }
    `}
  />
);

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
    defaultTheme: 'dark',
    Provider: ThemeProvider,
    GlobalStyles,
  }),
];
