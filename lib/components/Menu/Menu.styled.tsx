import styled from '@emotion/styled';
import type {MenuItemProps} from './MenuItem.tsx';
import {surfaceCard} from '../../themes';

export const MenuListStyled = styled.nav`
  max-width: 320px;
  min-width: 320px;
  width: 100%;
  height: auto;
  padding: ${({theme}) => theme.gaps.xs};
  ${({theme}) => surfaceCard(theme, '10px')};
`;

export const MenuItemStyled = styled.div<MenuItemProps>`
  width: 100%;
  padding: ${({theme}) => theme.gaps.xs} ${({theme}) => theme.gaps.md};
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: ${({theme}) => theme.typography.fontSizes.md};
  font-family: ${({theme}) => theme.typography.fontFamily};
  color: ${({theme}) => theme.colors.menuItemColor};
  border-radius: 10px;
  transition: background-color 0.2s ease;

  & > svg {
    margin-right: ${({theme}) => theme.gaps.sm};
  }

  &:hover {
    background-color: ${({theme}) => theme.colors.menuItemHoverBackgroundColor};
    color: ${({theme}) => theme.colors.menuItemHoverColor};
  }

  &:focus-visible {
    outline: 2px solid ${({theme}) => theme.colors.primary};
    outline-offset: -2px;
  }

  & > button {
    width: 100%;
    color: ${({theme}) => theme.colors.menuItemColor};
    font-size: ${({theme}) => theme.typography.fontSizes.md};
    font-family: ${({theme}) => theme.typography.fontFamily};
    justify-content: flex-start;
    padding: 0;

    &:hover {
      box-shadow: none;
      color: ${({theme}) => theme.colors.menuItemHoverColor};
    }
  }

  & > a {
    display: block;
    width: 100%;
    color: ${({theme}) => theme.colors.menuItemColor};

    &:hover {
      color: ${({theme}) => theme.colors.menuItemHoverColor};
    }
  }

  ${({disabled}) =>
    disabled &&
    `
    opacity: 0.5;
    pointer-events: none;
  `}
`;
