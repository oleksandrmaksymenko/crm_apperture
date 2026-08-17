import styled from '@emotion/styled';

export const StyledDividerContainer = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({theme}) => theme.colors.dividerBackgroundColor};
  border-radius: 4px;
`;
