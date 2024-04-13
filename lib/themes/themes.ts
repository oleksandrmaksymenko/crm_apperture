import {spacing} from './spacing';
import {shadows} from './shadows';
import {typography} from './typegraphy';
import {breakpoints} from './breakpoints';
import {palette} from './palette';
import {sizing} from './sizing';

const lightPalette: any = {};
const darkPalette: any = {};
const lightTextPalette: any = {};
const darkTextPalette: any = {};

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

export const lightTheme = {
  colors: lightPalette,
  text: lightTextPalette,
  typography,
  spacing,
  shadows,
  breakpoints,
  sizing,
};

export const darkTheme = {
  colors: darkPalette,
  text: darkTextPalette,
  typography,
  spacing,
  shadows,
  breakpoints,
  sizing,
};
