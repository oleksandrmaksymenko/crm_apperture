import type {Palette} from './themes/palette.ts';
import {gaps} from './themes/gaps.ts';
import {sizing} from './themes/sizing.ts';

export type ThemeColorType = keyof Palette;

export type SpacingType = keyof typeof gaps;

export type SizingType = keyof typeof sizing;
