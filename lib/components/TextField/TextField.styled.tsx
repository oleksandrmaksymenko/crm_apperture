import styled from '@emotion/styled';
import {TextFieldProps} from './index.tsx';
import {surfaceInset} from '../../themes';

type StyledTextFieldProps = Partial<Omit<TextFieldProps, 'onChange'>>;

export const StyledTextFieldContainer = styled.div<StyledTextFieldProps>`
  position: relative;
  display: ${({isFullWidth}) => (isFullWidth ? 'block' : 'inline-block')};
  width: ${({isFullWidth}) => (isFullWidth ? '100%' : 'auto')};
`;

export const StyledTextFieldControl = styled.div<
  StyledTextFieldProps & {isError?: boolean}
>`
  position: relative;
  ${({theme}) => surfaceInset(theme, '10px')};
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease;

  &:hover {
    border-color: ${({theme}) => theme.colors.primary};
  }

  &:focus-within {
    border-color: ${({theme}) => theme.colors.primary};
    box-shadow: 0 0 0 3px
      color-mix(in srgb, ${({theme}) => theme.colors.primary} 20%, transparent);
  }

  ${({theme, isError}) =>
    isError &&
    `
      border-color: ${theme.colors.error};
      box-shadow: 0 0 0 3px color-mix(in srgb, ${theme.colors.error} 20%, transparent);
    `}

  ${({theme, disabled}) =>
    disabled &&
    `
      opacity: 0.55;
      cursor: not-allowed;
      pointer-events: none;
      border-color: ${theme.colors.border};
    `}
`;

export const StyledInputRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: ${({theme}) => theme.gaps.xs};
  padding: ${({theme}) => `${theme.gaps.sm} ${theme.gaps['sm-2']}`};
`;

export const StyledLabel = styled.label<
  StyledTextFieldProps & {
    isFocus: boolean;
    isLeftIconPosition: boolean;
    isPrefix: boolean;
  }
>`
  position: absolute;
  top: 8px;
  left: ${({theme, isFocus, isLeftIconPosition, isPrefix}) =>
    !isFocus && (isLeftIconPosition || isPrefix)
      ? theme.gaps.xxl
      : isFocus
        ? theme.gaps.sm
        : theme.gaps['sm-2']};
  transition: all ${({theme}) => theme.transition};
  color: ${({theme}) => theme.text.primary};
  cursor: text;
  pointer-events: none;

  ${({isFocus, theme}) =>
    isFocus &&
    `
    padding: 0 ${theme.gaps.xs};
    font-size: ${theme.typography.fontSizes.xs};
    font-weight: ${theme.typography.fontWeights.light};
    line-height: ${theme.typography.lineHeights.xs};
    top: -5px;
    left: ${theme.gaps.sm};
    background: ${theme.colors.background};
    border-radius: ${theme.gaps.xs};
  `}
`;

export const StyledTextField = styled.input<StyledTextFieldProps>`
  flex: 1;
  min-width: 0;
  width: 100%;
  background-color: transparent;
  border: none;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
  color: ${({theme}) => theme.text.secondary};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({theme}) => theme.text.disabled};
  }
`;

export const StyledIconContainer = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  color: ${({theme}) => theme.text.secondary};

  svg {
    display: block;
  }
`;

export const StyledAffix = styled.span`
  flex-shrink: 0;
  white-space: nowrap;
  color: ${({theme}) => theme.text.secondary};
`;

export const StyledDescription = styled.span`
  display: block;
  margin-top: ${({theme}) => theme.gaps.xs};
  font-size: ${({theme}) => theme.typography.fontSizes.sm};
  font-weight: ${({theme}) => theme.typography.fontWeights.regular};
  line-height: ${({theme}) => theme.typography.lineHeights.lg};
  color: ${({theme}) => theme.text.secondary};
`;

export const StyledError = styled.span`
  display: block;
  margin-top: ${({theme}) => theme.gaps.xs};
  font-size: ${({theme}) => theme.typography.fontSizes.sm};
  font-weight: ${({theme}) => theme.typography.fontWeights.regular};
  line-height: ${({theme}) => theme.typography.lineHeights.lg};
  color: ${({theme}) => theme.text.error};
`;
