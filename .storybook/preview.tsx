import {withThemeFromJSXProvider} from '@storybook/addon-themes';
import {Global, css, ThemeProvider, useTheme} from '@emotion/react';
import {themes} from '@storybook/theming';

import {lightTheme, darkTheme} from '../lib/themes';

const GlobalStyles = () => {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        * {
          box-sizing: border-box;
        }

        body {
          font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial,
            sans-serif;
          min-height: 100vh;
          background: ${theme.colors.background};
          color: ${theme.text.primary};
        }
      `}
    />
  );
};

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

export const parameters = {
  docs: {
    theme: themes.dark,
  },
};
