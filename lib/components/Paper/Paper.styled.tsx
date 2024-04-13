import styled from '@emotion/styled';
import {ThemeProps} from '../../themes';

export const StyledPaper = styled.div<ThemeProps>`
  border-radius: 8px;
  box-shadow: ${({theme}) => theme.shadows.md};
  padding: ${({theme}) => theme.spacing.md};
  background-color: ${({theme}) => theme.colors.background};
  width: 100%;
`;
