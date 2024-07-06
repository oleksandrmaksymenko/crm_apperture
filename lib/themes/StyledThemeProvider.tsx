import {ThemeProvider} from '@emotion/react';

export const StyledThemeProvider: ThemeProvider = ({children, theme}) =>
  ThemeProvider({theme, children});
