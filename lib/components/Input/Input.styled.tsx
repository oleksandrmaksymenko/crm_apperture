import styled from '@emotion/styled';
import {InputProps} from './index.tsx';
import {ThemeProps} from '../../themes';

type StyledInputProps = InputProps & ThemeProps;

export const StyledInputContainer = styled.div<StyledInputProps>`
  width: max-content;
  position: relative;
  display: flex;
  gap: ${({theme}) => theme.gaps.md};
`;

export const StyledInputControl = styled.div<StyledInputProps>`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const StyledLabel = styled.label<StyledInputProps>`
  position: absolute;
  top: 5px;
  left: ${({theme, isFocus}) => (isFocus ? theme.gaps.xs : theme.gaps['sm-2'])};
  transition: all ${({theme}) => theme.transition};
  color: ${({theme}) => theme.text.primary};
  cursor: text;

  ${({isFocus, theme}) =>
    isFocus &&
    `
    padding: ${theme.gaps.xs} ${theme.gaps.sm};
    font-size: ${theme.typography.fontSizes.xs};
    font-weight: ${theme.typography.fontWeights.light};
    line-height: ${theme.typography.lineHeights.xs};
    top: -12px;
  `}
`;

export const StyledInput = styled.input<StyledInputProps & {isError: boolean}>`
  width: ${({isFullWidth}) => (isFullWidth ? '100%' : 'auto')};
  padding: ${({theme}) => `${theme.gaps.sm} ${theme.gaps['sm-2']}`};
  background-color: transparent;
  border: none;
  border-bottom: 1px solid
    ${({theme, isError}) =>
      isError ? theme.colors.error : theme.colors.border};
  color: ${({theme}) => theme.text.secondary};

  &:focus {
    outline: none;
  }
`;

export const StyledIconContainer = styled.div<
  StyledInputProps & {isLeft: boolean}
>`
  position: absolute;
  top: 5px;

  ${({isLeft}) => (isLeft ? `left: 0` : `right: 0`)}
`;

export const StyledPrefix = styled.span<StyledInputProps>``;

export const StyledSuffix = styled.span<StyledInputProps>``;

export const StyledDescription = styled.span<StyledInputProps>`
  ${({theme}) => `
    margin-left: ${theme.gaps['sm-2']};
    font-size: ${theme.typography.fontSizes.sm};
    font-weight: ${theme.typography.fontWeights.regular};
    line-height: ${theme.typography.lineHeights.lg};
    color: ${theme.text.secondary};
  `}
`;

export const StyledError = styled.span<StyledInputProps>`
  ${({theme}) => `
    margin-left: ${theme.gaps['sm-2']};
    font-size: ${theme.typography.fontSizes.sm};
    font-weight: ${theme.typography.fontWeights.regular};
    line-height: ${theme.typography.lineHeights.lg};
    color: ${theme.text.error};
  `}
`;
