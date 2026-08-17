import {gaps} from './gaps.ts';
import {shadows} from './shadows';
import {typography} from './typography';
import {breakpoints} from './breakpoints';
import {palette, Palette} from './palette';
import {sizing} from './sizing';

type ColorValue = {light: string; dark: string};
type ColorMap = Record<string, string>;

const lightPalette: ColorMap = {};
const darkPalette: ColorMap = {};
const lightTextPalette: ColorMap = {};
const darkTextPalette: ColorMap = {};

(Object.keys(palette) as (keyof Palette)[]).forEach(key => {
  if (key === 'text') {
    const textPalette = palette.text as Record<string, ColorValue>;
    Object.keys(textPalette).forEach(textKey => {
      const {light, dark} = textPalette[textKey];
      if (dark) darkTextPalette[textKey] = dark;
      if (light) lightTextPalette[textKey] = light;
    });
    return;
  }

  const {light, dark} = palette[key] as ColorValue;
  if (dark) darkPalette[key] = dark;
  if (light) lightPalette[key] = light;
});

const transition = '0.3s';

export const lightTheme = {
  colors: lightPalette,
  text: lightTextPalette,
  typography,
  gaps,
  shadows,
  breakpoints,
  sizing,
  transition,
};

export const darkTheme = {
  colors: darkPalette,
  text: darkTextPalette,
  typography,
  gaps,
  shadows,
  breakpoints,
  sizing,
  transition,
};
