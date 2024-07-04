import {darkTheme, lightTheme} from './themes';
import {gaps} from './themes/gaps.ts';
import {sizing} from './themes/sizing.ts';

export type ThemeColorType = (typeof darkTheme | typeof lightTheme)[
  | keyof typeof darkTheme
  | keyof typeof lightTheme];

export type SpacingType = (typeof gaps)[keyof typeof gaps];

export type SizingType = (typeof sizing)[keyof typeof sizing];
