import styled from '@emotion/styled';
import {ButtonProps} from './index';
import {ThemeProps} from '../../themes';

type ButtonStyledProps = ButtonProps & ThemeProps;

const variantCollector = (
  {colors, text}: ThemeProps,
  variant: ButtonProps['variant'],
) => `
  background-color: ${colors[variant]};
  color: ${text[variant]};
`;

const outline = ({colors, text}: ThemeProps) => `
  background-color: transparent;
  border: 1px solid ${colors.primary};
  color: ${text.primary};
`;

const text = ({text}: ThemeProps) => `
  background-color: transparent;
  color: ${text.primary};
`;

const disabled = ({colors, text}: ThemeProps) => `
  background-color: ${colors.disabled};
  color: ${text.disabled};
  cursor: not-allowed;
  pointer-events: none;
  
  &:hover {
    box-shadow: none;
  }
`;

export const StyledButton = styled.button<ButtonStyledProps>`
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.3s ease;
  user-select: none;

  ${({isFullSize}) => (isFullSize ? `width: 100%;` : '')}

  &:hover {
    box-shadow: ${({theme}) => theme.shadows.lg};
  }

  &:active {
    box-shadow: none;
  }

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
    border-radius: 50%;
  `})
`;
