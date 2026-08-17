import {PropsWithChildren} from 'react';
import {ThemeProvider, Theme} from '@emotion/react';

export type StyledThemeProviderProps = PropsWithChildren<{theme: Theme}>;

export const StyledThemeProvider = ({
  children,
  theme,
}: StyledThemeProviderProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
