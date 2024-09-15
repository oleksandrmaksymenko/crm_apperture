import styled from '@emotion/styled';
import {ThemeProps} from '../../themes';
import {TableContainerProps} from './TableContainer.tsx';

type StyledInputGroupProps = TableContainerProps & ThemeProps;

const tableTemplateColumn = (length: number): string =>
  `40px repeat(${length}, 1fr) 42px`;

export const StyledTable = styled.div<StyledInputGroupProps>`
  ${({theme}) => ({
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSizes.md,
    lineHeight: theme.typography.lineHeights.xxl,
  })};
`;

export const StyledTableHead = styled.div<
  StyledInputGroupProps & {
    length: number;
  }
>`
  display: grid;
  grid-template-columns: ${({length}) => tableTemplateColumn(length)};

  ${({theme}) => ({
    color: theme.colors.tableHeaderColor,
    backgroundColor: theme.colors.tableHeaderBackgroundColor,
  })};

  &:first-of-type {
    padding-left: 8px;
  }

  & > div {
    cursor: pointer;
  }
`;

export const StyledTableRow = styled.div<
  StyledInputGroupProps & {
    isSelected?: boolean;
    length: number;
  }
>`
  display: grid;
  grid-template-columns: ${({length}) => tableTemplateColumn(length)};
  padding-left: 8px;

  ${({isSelected, theme}) => ({
    backgroundColor: isSelected
      ? theme.colors.tableRowActiveBackgroundColor
      : 'transparent',
  })}

  ${({theme}) => ({
    color: theme.colors.tableBodyColor,
  })};

  &:hover {
    ${({theme}) => ({
      backgroundColor: theme.colors.tableRowHoverBackgroundColor,
      color: theme.colors.tableRowHoverColor,
    })}
  }
`;

export const StyledTableCell = styled.div<StyledInputGroupProps>`
  padding: 4px;
`;
