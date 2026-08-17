import styled from '@emotion/styled';
import type {PaperProps} from './index.tsx';
import {shadows} from '../../themes/shadows.ts';
import {surfaceCard} from '../../themes';

const elevationMap: {[key: number]: keyof typeof shadows} = {
  0: 'none',
  1: 'sm',
  2: 'md',
  3: 'lg',
  4: 'xl',
  5: '2xl',
  6: 'inner',
};

export const StyledPaper = styled.div<Partial<PaperProps>>`
  ${({theme, rounded}) => surfaceCard(theme, theme.gaps[rounded || 'lg'])};
  ${({theme, bg}) => bg && `background: ${theme.colors[bg]};`}
  ${({theme, elevation}) =>
    elevation && `box-shadow: ${theme.shadows[elevationMap[elevation]]};`}
  padding: ${({theme, rounded, padding}) =>
    theme.gaps[rounded || padding || 'sm']};
  color: ${({theme}) => theme.text.primary};
  width: auto;
  max-width: 100%;
  transition: box-shadow 0.2s ease;
`;
