import {css} from '@emotion/react';
import type {ThemeProps} from '../index';

export const surfaceCard = (theme: ThemeProps, radius = '12px') => css`
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.border};
  border-radius: ${radius};
  box-shadow: ${theme.shadows.md};
`;

export const surfaceInset = (theme: ThemeProps, radius = '8px') => css`
  background: ${theme.colors.background};
  border: 1px solid ${theme.colors.border};
  border-radius: ${radius};
`;
