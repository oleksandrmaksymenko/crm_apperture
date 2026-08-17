import styled from '@emotion/styled';
import type {LinkProps} from './index.tsx';
import type {Light} from '../../themes';

type ColorsType = Light['colors'];

const hoverUnderline = `
  &:hover {
    text-decoration: underline;
  }
`;

const alwaysUnderline = (colors: ColorsType) => `
  position: relative;
  
  &:after {
    content:'';
    height: 1px;
    background-color: ${colors.linkUnderlineColor};
    position: absolute;
    bottom: 4px;
    left: 0;
    right: 0;
    opacity: 0.5;
  }
  
  &:hover:after {
    opacity: 1;
  }
`;

const viewTextDecoration = (
  underline: string | undefined,
  colors: ColorsType,
) => {
  if (underline === 'hover') return hoverUnderline;
  if (underline === 'always') return alwaysUnderline(colors);
  return ``;
};

export const StyledLink = styled.a<Partial<LinkProps>>`
  color: ${({theme}) => theme.colors.linkColor};
  text-decoration: none;
  transition: ${({theme}) => theme.transition};

  ${({underline, theme: {colors}}) => viewTextDecoration(underline, colors)}
  ${({theme, size}) => size && theme.typography.fontMixin[size]}
  
  &:hover {
    color: ${({theme}) => theme.colors.linkColorHover};
  }

  ${({selected, theme}) =>
    selected && {
      color: theme.colors.linkColorSelected,
    }}
`;
