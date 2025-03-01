import styled from '@emotion/styled';
import {ThemeProps} from '../../themes';
import {TableContainerTypeProps} from './TableContainer.tsx';

type StyledInputGroupProps = TableContainerTypeProps & ThemeProps;

const tableTemplateColumn = (
  length: number,
  withCheckbox: boolean,
  withActions: boolean,
): string =>
  `${withCheckbox ? '40px' : ''} minmax(40px, 60px) repeat(${length - 1}, 1fr) ${withActions ? '42px' : ''}`;

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
    withCheckbox: boolean;
    withActions: boolean;
  }
>`
  display: grid;
  grid-template-columns: ${({length, withCheckbox, withActions}) =>
    tableTemplateColumn(length, withCheckbox, withActions)};

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
  height: 42px;
  display: grid;
  grid-template-columns: ${({length, withCheckbox, withActions}) =>
    tableTemplateColumn(length, withCheckbox, withActions)};
  padding-left: 8px;

  ${({isSelected, theme}) => ({
    backgroundColor: isSelected
      ? theme.colors.tableRowActiveBackgroundColor
      : 'transparent',
  })}

  ${({theme}) => ({
    color: theme.colors.tableBodyColor,
  })};
`;

export const StyledTableCell = styled.div<StyledInputGroupProps>`
  padding: 4px;
  display: flex;
  align-items: center;
`;

export const StyledActionsContainer = styled.div`
  position: relative;
`;
