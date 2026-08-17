import {lightTheme, darkTheme} from './themes';

export type Light = typeof lightTheme;
export type Dark = typeof darkTheme;

export type ThemeProps = Light | Dark;

declare module '@emotion/react' {
  export interface Theme extends Light {}
}

export {lightTheme, darkTheme};

export {StyledThemeProvider} from './StyledThemeProvider.tsx';

export {surfaceCard, surfaceInset} from './mixins/surface.ts';
