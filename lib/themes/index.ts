import {lightTheme, darkTheme} from './themes';

export type PathInto<T extends Record<string, any>> = keyof {
  [K in keyof T as T[K] extends string
    ? K
    : T[K] extends Record<string, any>
      ? `${K & string}.${PathInto<T[K]> & string}`
      : never]: any;
};

export type PathTrace<T, K extends keyof T = keyof T> = K extends string
  ? T[K] extends Record<string, any>
    ? `${K}.${PathTrace<T[K]>}`
    : K
  : never;

type LightMap = typeof lightTheme;
type LightName = keyof LightMap;
export type Light = LightMap[LightName];

type DarkMap = typeof darkTheme;
type DarkName = keyof DarkMap;
export type Dark = DarkMap[DarkName];

export type ThemeProps = Light | Dark;

export {lightTheme, darkTheme};
