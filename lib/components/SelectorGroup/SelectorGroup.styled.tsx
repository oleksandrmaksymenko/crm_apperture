import styled from '@emotion/styled';
import type {ThemeProps} from '../../themes';
import type {SelectorGroupProps} from './index.tsx';

type StyledSelectorGroupProps = SelectorGroupProps & ThemeProps;

export const StyledSelectorGroupContainer = styled.div<StyledSelectorGroupProps>`
  display: flex;
  flex-direction: ${({direction}) =>
    direction === 'vertical' ? 'column' : 'row'};
  gap: ${({theme, gap}) => theme.spacing[gap]};
`;
