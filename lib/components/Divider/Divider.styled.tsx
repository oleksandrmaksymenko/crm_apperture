import styled from '@emotion/styled';
import {ThemeProps} from '../../themes';

export const StyledDividerContainer = styled.div<ThemeProps>`
  width: 100%;
  height: 2px;
  background-color: ${({theme}) => theme.colors.dividerBackgroundColor};
  border-radius: 4px;
`;
