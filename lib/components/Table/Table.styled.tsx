import styled from '@emotion/styled';
import {surfaceCard} from '../../themes';

const tableTemplateColumn = (
  length: number,
  withCheckbox?: boolean,
  withActions?: boolean,
): string =>
  `${withCheckbox ? '40px' : ''} minmax(40px, 60px) repeat(${length - 1}, 1fr) ${withActions ? '42px' : ''}`;

type TableGridProps = {
  length: number;
  withCheckbox?: boolean;
  withActions?: boolean;
};

export const StyledTable = styled.div`
  font-family: ${({theme}) => theme.typography.fontFamily};
  font-size: ${({theme}) => theme.typography.fontSizes.md};
  line-height: ${({theme}) => theme.typography.lineHeights.xxl};
  ${({theme}) => surfaceCard(theme, '10px')};
`;

export const StyledTableHead = styled.div<TableGridProps>`
  display: grid;
  grid-template-columns: ${({length, withCheckbox, withActions}) =>
    tableTemplateColumn(length, withCheckbox, withActions)};
  padding: ${({theme}) => theme.gaps.sm} 0;
  border-bottom: 1px solid ${({theme}) => theme.colors.border};

  ${({theme}) => ({
    color: theme.colors.tableHeaderColor,
  })};

  &:first-of-type {
    padding-left: 8px;
  }

  & > div {
    cursor: pointer;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const StyledTableRow = styled.div<
  TableGridProps & {isSelected?: boolean}
>`
  height: 42px;
  display: grid;
  grid-template-columns: ${({length, withCheckbox, withActions}) =>
    tableTemplateColumn(length, withCheckbox, withActions)};
  padding-left: 8px;
  border-bottom: 1px solid ${({theme}) => theme.colors.border};
  transition: background-color 0.15s ease;

  &:last-of-type {
    border-bottom: none;
  }

  ${({isSelected, theme}) => ({
    backgroundColor: isSelected
      ? theme.colors.tableRowActiveBackgroundColor
      : 'transparent',
  })}

  &:hover {
    background-color: ${({theme}) => theme.colors.tableRowHoverBackgroundColor};
  }

  ${({theme}) => ({
    color: theme.colors.tableBodyColor,
  })};

  @media (max-width: ${({theme}) => theme.breakpoints.md}) {
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: ${({theme}) => theme.gaps.xs};
    padding: ${({theme}) => theme.gaps.md};
  }
`;

export const StyledTableCell = styled.div`
  padding: 4px;
  display: flex;
  align-items: center;

  @media (max-width: ${({theme}) => theme.breakpoints.md}) {
    justify-content: space-between;
    width: 100%;
    padding: 2px 0;

    &::before {
      content: attr(data-label);
      font-weight: ${({theme}) => theme.typography.fontWeights.medium};
      color: ${({theme}) => theme.colors.tableHeaderColor};
      margin-right: ${({theme}) => theme.gaps.sm};
    }
  }
`;

export const StyledActionsContainer = styled.div`
  position: relative;
`;
