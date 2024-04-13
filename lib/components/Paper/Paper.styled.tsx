import styled from '@emotion/styled';
import {ThemeProps} from '../../themes';
import {shadows} from '../../themes/shadows.ts';

const elevationMap: {[key: number]: keyof typeof shadows} = {
  0: 'none',
  1: 'sm',
  2: 'md',
  3: 'lg',
  4: 'xl',
  5: '2xl',
  6: 'inner',
};

export const StyledPaper = styled.div<ThemeProps>`
  box-shadow: ${({theme, elevation}) => theme.shadows[elevationMap[elevation]]};
  padding: ${({theme, rounded}) => theme.spacing[rounded || 'md']};
  background-color: ${({theme}) => theme.colors.background};
  color: ${({theme}) => theme.text.primary};
  width: auto;
  max-width: 100%;
  ${({theme, rounded}) =>
    rounded && `border-radius: ${theme.spacing[rounded]};`};
`;
