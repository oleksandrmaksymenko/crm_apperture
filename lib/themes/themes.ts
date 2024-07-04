import {gaps} from './gaps.ts';
import {shadows} from './shadows';
import {typography} from './typegraphy';
import {breakpoints} from './breakpoints';
import {palette} from './palette';
import {sizing} from './sizing';

type PaletteType = any;

const lightPalette: PaletteType = {};
const darkPalette: PaletteType = {};
const lightTextPalette: PaletteType = {};
const darkTextPalette: PaletteType = {};

Object.keys(palette).forEach(key => {
  const lightValue = palette[key]['light'];
  const darkValue = palette[key]['dark'];
  if (darkValue) darkPalette[key] = darkValue;
  if (lightValue) lightPalette[key] = lightValue;

  if (key === 'text') {
    Object.keys(palette[key]).forEach(textKey => {
      const lightTextValue = palette[key][textKey]['light'];
      const darkTextValue = palette[key][textKey]['dark'];
      if (darkTextValue) darkTextPalette[textKey] = darkTextValue;
      if (lightTextValue) lightTextPalette[textKey] = lightTextValue;
    });
  }
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
