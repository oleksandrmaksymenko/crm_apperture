import styled from '@emotion/styled';
import {css} from '@emotion/react';
import {ButtonProps} from './index';
import {ThemeProps} from '../../themes';

type ButtonStyledProps = Omit<ButtonProps, 'children'> & {
  children: React.ReactNode[];
};

const variantCollector = (
  theme: ThemeProps,
  variant: ButtonProps['variant'],
) => css`
  background: ${theme.colors[variant]};
  border: 1px solid transparent;
  color: ${variant === 'warning' ? theme.colors.black : theme.colors.white};

  &:hover {
    filter: brightness(0.92);
  }
`;

const outline = (theme: ThemeProps) => css`
  background: transparent;
  border: 1px solid ${theme.colors.border};
  color: ${theme.text.primary};

  &:hover {
    background: ${theme.colors.surface};
    border-color: ${theme.colors.primary};
  }
`;

const text = (theme: ThemeProps) => css`
  background: transparent;
  border: 1px solid transparent;
  color: ${theme.text.primary};

  &:hover {
    background: ${theme.colors.surface};
  }
`;

const disabled = (theme: ThemeProps) => css`
  background: ${theme.colors.background};
  border: 1px solid ${theme.colors.border};
  color: ${theme.text.disabled};
  cursor: not-allowed;
  pointer-events: none;
`;

export const StyledButton = styled.button<ButtonStyledProps>`
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    filter 0.15s ease,
    background-color 0.15s ease,
    border-color 0.15s ease;
  user-select: none;
  color: ${({theme}) => theme.text.primary};

  ${({isFullSize}) => (isFullSize ? `width: 100%;` : '')}

  ${({icon, iconPosition, theme}) => {
    if (icon) {
      if (iconPosition === 'left') {
        return `
          & span {
            margin-left: ${theme.gaps.sm};
          }
        `;
      }

      return `
        & span {
          margin-right: ${theme.gaps.sm};
        }
      `;
    }
  }}

  ${({variant, theme}) => {
    switch (variant) {
      case 'outline':
        return outline(theme);
      case 'text':
        return text(theme);
      case 'disabled':
        return disabled(theme);
      default:
        return variantCollector(theme, variant);
    }
  }}

  ${({size, theme}) => {
    switch (size) {
      case 'small':
        return `padding: ${theme.gaps.xs} ${theme.gaps.sm}; font-size: ${theme.typography.fontSizes.sm};`;
      case 'medium':
        return `padding: ${theme.gaps.sm} ${theme.gaps.md}; font-size: ${theme.typography.fontSizes.md};`;
      case 'large':
        return `padding: ${theme.gaps['sm-2']} ${theme.gaps.lg}; font-size: ${theme.typography.fontSizes.lg};`;
      case 'xlarge':
        return `padding: ${theme.gaps.md} ${theme.gaps.xl}; font-size: ${theme.typography.fontSizes.xl};`;
      default:
        return `padding: ${theme.gaps.sm} ${theme.gaps.md}; font-size: ${theme.typography.fontSizes.md};`;
    }
  }}

  ${({icon, children, theme}) =>
    !children[1] &&
    icon &&
    `
    padding: ${theme.gaps.sm};
    border-radius: 8px;
  `}
`;
