import {darkTheme, lightTheme} from './themes';
import {spacing} from './themes/spacing.ts';
import {sizing} from './themes/sizing.ts';

export type ThemeColorType = (typeof darkTheme | typeof lightTheme)[
  | keyof typeof darkTheme
  | keyof typeof lightTheme];

export type SpacingType = (typeof spacing)[keyof typeof spacing];

export type SizingType = (typeof sizing)[keyof typeof sizing];
