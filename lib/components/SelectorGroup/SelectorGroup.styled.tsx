import styled from '@emotion/styled';
import type {SelectorGroupProps} from './index.tsx';

type StyledSelectorGroupProps = Partial<SelectorGroupProps>;

export const StyledSelectorGroupContainer = styled.div<StyledSelectorGroupProps>`
  display: flex;
  flex-direction: ${({direction}) =>
    direction === 'vertical' ? 'column' : 'row'};
  gap: ${({theme, gap}) => theme.gaps[gap || 'sm']};
`;
