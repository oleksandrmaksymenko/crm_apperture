import styled from '@emotion/styled';
import {ThemeProps} from '../../themes';
import {DropdownProps} from './index.tsx';

type StyledDropdownProps = DropdownProps & ThemeProps;

const listSizes: {
  [key: string]: {left: number | string; right: string | number};
} = {
  sm: {
    left: '40%',
    right: '40%',
  },
  md: {
    left: '10%',
    right: '10%',
  },
  lg: {
    left: '8px',
    right: '8px',
  },
};

export const StyledDropdownContainer = styled.div<StyledDropdownProps>`
  width: ${({size}) => (size === 'full' ? '100%' : 'fit-content')};
  user-select: none;
  font-family: ${({theme}) => theme.typography.fontFamily};
  position: relative;
  background-color: ${({theme}) =>
    theme.colors.dropdownContainerBackgroundColor};
  border-radius: 8px;

  ${({disabled, theme}) =>
    disabled && {
      pointerEvents: 'none',
      backgroundColor: theme.colors.dropdownContainerDisabledBackgroundColor,
    }}
`;

export const StyledDropdownLabelText = styled.div<StyledDropdownProps>`
  cursor: pointer;
  border: 1px solid ${({theme}) => theme.colors.dropdownBorderColor};
  padding: ${({theme}) => theme.gaps.sm};
  color: ${({theme}) => theme.colors.dropdownLabelColor};
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: ${({theme}) => theme.gaps.sm};
  ${({listSize, theme}) => {
    if (listSize) {
      return {
        ...listSizes[listSize],
        ...theme.typography.fontMixin[listSize],
      };
    }

    return null;
  }}
`;

export const StyledDropdownTitle = styled.h3<StyledDropdownProps>`
  pointer-events: none;
  margin: 0;
`;

export const StyledDropdownToggle = styled.div<StyledDropdownProps>`
  max-height: ${({isDropdownShow}) => (isDropdownShow ? '500px' : '0')};
  overflow: hidden;
  position: absolute;
  transform: translateY(5%);
  box-sizing: content-box;
  transition: max-height ${({theme}) => theme.transition};

  ${({listSize, listPosition, theme}) => {
    if (listSize) {
      return {
        ...listSizes[listSize],
        ...theme.typography.fontMixin[listSize],
      };
    }

    if (listPosition) {
      return {
        ...theme.typography.fontMixin[listSize],
      };
    }

    return {
      left: theme.gaps.sm,
      right: theme.gaps.sm,
      ...theme.typography.fontMixin.md,
    };
  }}
`;

export const StyledDropdownToggleTitleContainer = styled.div<StyledDropdownProps>`
  pointer-events: none;
`;

export const StyledIconContainer = styled.div<StyledDropdownProps>`
  width: 24px;
  height: 24px;
  transition: transform ${({theme}) => theme.transition};

  ${({isDropdownShow}) =>
    isDropdownShow ? 'transform: rotate(180deg)' : 'transform: rotate(0)'};
`;

export const StyledDropdownListContainer = styled.ul<StyledDropdownProps>`
  margin: ${({theme}) => theme.gaps.sm} 0 0 0;
  padding: 0;
  border-radius: 8px;
  background-color: ${({theme}) =>
    theme.colors.DropdownListContainerBackgroundColor};

  svg {
    pointer-events: none;
  }
`;

export const StyledDropdownListItem = styled.li<StyledDropdownProps>`
  padding: ${({theme}) => theme.gaps.sm};
  cursor: pointer;
  list-style: none;
  display: flex;
  align-items: center;
  gap: ${({theme}) => theme.gaps.sm};
  transition: ${({theme}) => theme.transition};
  color: ${({theme}) => theme.colors.dropdownListItemColor};

  & + & {
    margin-top: ${({theme}) => theme.gaps.sm};
  }

  &:first-of-type {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  &:last-of-type {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  &:hover {
    color: ${({theme}) => theme.colors.dropdownListItemHomerColor};
    background-color: ${({theme}) =>
      theme.colors.dropdownListItemHoverBackgroundColor};
  }
`;
