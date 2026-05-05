import {selector} from './palette/selector';
import {switcher} from './palette/switcher';
import {paper} from './palette/paper';
import {popup} from './palette/popup';
import {dropdown} from './palette/dropdown';
import {divider} from './palette/divider';
import {table} from './palette/table';
import {menu} from './palette/menu';
import {link} from './palette/link';

export const elementPalette = {
  ...selector,
  ...switcher,
  ...paper,
  ...popup,
  ...divider,
  ...dropdown,
  ...table,
  ...menu,
  ...link,
};
