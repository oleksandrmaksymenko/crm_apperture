import styled from '@emotion/styled';
import {DropdownProps} from './index.tsx';
import {surfaceCard, surfaceInset} from '../../themes';

type StyledDropdownProps = Partial<DropdownProps> & {isDropdownShow?: boolean};

const listSizes: {
  [key: string]: Partial<{
    left: number | string;
    right: string | number;
    width: number | string;
  }>;
} = {
  sm: {
    width: 200,
  },
  md: {
    width: 400,
  },
  lg: {
    width: 600,
  },
};

export const StyledDropdownContainer = styled.div<StyledDropdownProps>`
  width: ${({size}) => (size === 'full' ? '100%' : 'fit-content')};
  user-select: none;
  font-family: ${({theme}) => theme.typography.fontFamily};
  position: relative;
  ${({theme}) => surfaceInset(theme, '10px')};
  transition:
    border-color 0.15s ease,
    opacity 0.15s ease;

  &:hover {
    border-color: ${({theme}) => theme.colors.primary};
  }

  ${({disabled, theme}) =>
    disabled &&
    `
      opacity: 0.55;
      cursor: not-allowed;
      pointer-events: none;
      background: ${theme.colors.dropdownContainerDisabledBackgroundColor};

      &:hover {
        border-color: ${theme.colors.border};
      }
    `}
`;

export const StyledDropdownLabelText = styled.div<StyledDropdownProps>`
  cursor: pointer;
  padding: ${({theme}) => theme.gaps.sm};
  color: ${({theme}) => theme.colors.dropdownLabelColor};
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: ${({theme}) => theme.gaps.sm};

  &:focus-visible {
    outline: 2px solid ${({theme}) => theme.colors.primary};
    outline-offset: 2px;
  }

  ${({size, listSize, theme}) => {
    if (listSize) {
      return {
        ...(size === 'content' && listSizes[listSize]),
        ...theme.typography.fontMixin[listSize],
      };
    }

    return null;
  }}

  right: inherit;
  left: inherit;
`;

export const StyledDropdownToggle = styled.div<StyledDropdownProps>`
  max-height: ${({isDropdownShow}) => (isDropdownShow ? '500px' : '0')};
  overflow: hidden;
  position: absolute;
  top: calc(100% + ${({theme}) => theme.gaps.xs});
  box-sizing: content-box;
  transition: max-height ${({theme}) => theme.transition};

  ${({listSize, theme, size}) => {
    if (listSize && size === 'content') {
      return {
        ...listSizes[listSize],
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

export const StyledIconContainer = styled.div<StyledDropdownProps>`
  width: 24px;
  height: 24px;
  transition: transform ${({theme}) => theme.transition};

  ${({isDropdownShow}) =>
    isDropdownShow ? 'transform: rotate(180deg)' : 'transform: rotate(0)'};
`;

export const StyledDropdownListContainer = styled.ul<StyledDropdownProps>`
  margin: 0;
  padding: ${({theme}) => theme.gaps.xs};
  ${({theme}) => surfaceCard(theme, '10px')};

  svg {
    pointer-events: none;
  }
`;

export const StyledDropdownListItem = styled.li<
  StyledDropdownProps & {isSelected?: boolean}
>`
  padding: ${({theme}) => theme.gaps.sm};
  cursor: pointer;
  list-style: none;
  display: flex;
  align-items: center;
  gap: ${({theme}) => theme.gaps.sm};
  transition: ${({theme}) => theme.transition};
  color: ${({theme}) => theme.colors.dropdownListItemColor};
  border-radius: 10px;

  ${({isSelected, theme}) =>
    isSelected &&
    `
      color: ${theme.colors.dropdownListItemHoverColor};
      background-color: color-mix(in srgb, ${theme.colors.primary} 12%, transparent);
      font-weight: ${theme.typography.fontWeights.medium};
    `}

  & + & {
    margin-top: ${({theme}) => theme.gaps.xs};
  }

  &:hover {
    color: ${({theme}) => theme.colors.dropdownListItemHoverColor};
    background-color: ${({theme}) =>
      theme.colors.dropdownListItemHoverBackgroundColor};
  }

  &:focus-visible {
    outline: 2px solid ${({theme}) => theme.colors.primary};
    outline-offset: -2px;
  }
`;
