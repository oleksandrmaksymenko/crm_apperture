import {blueGrey} from '../colors.ts';

const selector = {
  selectorBorderColor: {
    light: blueGrey[100],
    dark: blueGrey[100],
  },
  selectorBackgroundColor: {
    light: blueGrey[100],
    dark: blueGrey[100],
  },
  selectorDisabledBorderColor: {
    light: '#4b1010',
    dark: '#222291',
  },
  selectorDisabledBackgroundColor: {
    light: '#691515',
    dark: '#242479',
  },
  selectorLabelText: {
    light: '#111827',
    dark: '#fefefe',
  },
  checkboxSvgFill: {
    light: '#20a124',
    dark: '#111827',
  },
  checkboxDisabledSvgFill: {
    light: '#20a124',
    dark: '#ea134e',
  },
  checkboxBackgroundColor: {
    light: '#20a124',
    dark: '#ea134e',
  },
  radioBorderActiveColor: {
    light: '#f33',
    dark: '#f33',
  },
};

const switcher = {
  selectorBorderColor: {
    light: '#3fd',
    dark: '#3fd',
  },
  switcherBackgroundColor: {
    light: '#3ff',
    dark: '#3ff',
  },
  switcherDisabledBorderColor: {
    light: '#22a692',
    dark: '#22a692',
  },
  switcherDisabledBackgroundColor: {
    light: '#26b7b7',
    dark: '#26b7b7',
  },
  switcherBackground: {
    light: '#00bd68',
    dark: '#00bd68',
  },
  switcherDisabledBackground: {
    light: '#5d0ebe',
    dark: '#5d0ebe',
  },
};

const paper = {
  paperBackgroundColor: {
    light: '#fff',
    dark: blueGrey[900],
  },
  paperTextColor: {
    light: blueGrey[900],
    dark: '#fff',
  },
};

const popup = {
  popupOverlayBackgroundColor: {
    light: 'rgba(0,0,0,0.5)',
    dark: 'rgba(0,0,0,0.5)',
  },
};

export const elementPalette = {
  ...selector,
  ...switcher,
  ...paper,
  ...popup,
};
