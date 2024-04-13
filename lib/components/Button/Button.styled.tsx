import styled from '@emotion/styled';
import {ButtonProps} from './index';
import {ThemeProps} from '../../themes';

type ButtonStyledProps = ButtonProps & ThemeProps;

const primary = ({colors, text}: ThemeProps) => ` 
  background-color: ${colors.primary};
  color: ${text.primary};
`;

const secondary = ({colors, text}: ThemeProps) => `
  background-color: ${colors.secondary};
  color: ${text.secondary};
`;

const tertiary = ({colors, text}: ThemeProps) => `
 background-color: ${colors.tertiary};
  color: ${text.tertiary};
`;

const error = ({colors, text}: ThemeProps) => `
  background-color: ${colors.error};
  color: ${text.error};
`;

const warning = ({colors, text}: ThemeProps) => `
  background-color: ${colors.warning};
  color: ${text.warning};
`;

const success = ({colors, text}: ThemeProps) => `
  background-color: ${colors.success};
  color: ${text.success};
`;

const info = ({colors, text}: ThemeProps) => `
  background-color: ${colors.info};
  color: ${text.info};
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

  &:hover {
    box-shadow: ${({theme}) => theme.shadows.lg};
  }

  ${({icon, iconPosition, theme}) => {
    if (icon) {
      if (iconPosition === 'left') {
        return `
          & span {
            margin-left: ${theme.spacing.sm};
          }
        `;
      }
      return `
        & span {
          margin-right: ${theme.spacing.sm};
        }
      `;
    }
  }}

  ${({variant, theme}) => {
    switch (variant) {
      case 'secondary':
        return secondary(theme);
      case 'tertiary':
        return tertiary(theme);
      case 'error':
        return error(theme);
      case 'warning':
        return warning(theme);
      case 'success':
        return success(theme);
      case 'info':
        return info(theme);
      case 'outline':
        return outline(theme);
      case 'text':
        return text(theme);
      case 'disabled':
        return disabled(theme);
      default:
        return primary(theme);
    }
  }}

  ${({size, theme}) => {
    switch (size) {
      case 'small':
        return `padding: ${theme.spacing.xs} ${theme.spacing.sm}; font-size: ${theme.typography.fontSizes.sm};`;
      case 'medium':
        return `padding: ${theme.spacing.sm} ${theme.spacing.md}; font-size: ${theme.typography.fontSizes.md};`;
      case 'large':
        return `padding: ${theme.spacing['sm-2']} ${theme.spacing.lg}; font-size: ${theme.typography.fontSizes.lg};`;
      case 'xlarge':
        return `padding: ${theme.spacing.md} ${theme.spacing.xl}; font-size: ${theme.typography.fontSizes.xl};`;
      default:
        return `padding: ${theme.spacing.sm} ${theme.spacing.md}; font-size: ${theme.typography.fontSizes.md};`;
    }
  }}
  
  ${({icon, children, theme}) =>
    !children[1] &&
    icon &&
    `
    padding: ${theme.spacing.sm};
    border-radius: 50%;
  `})
`;
