import styled from '@emotion/styled';
import {RadioProps} from './index.tsx';
import {ThemeProps} from '../../themes';

type StyledRadioProps = RadioProps & ThemeProps;

export const StyledRadioContainer = styled.div<StyledRadioProps>``;

export const StyledRadio = styled.input<StyledRadioProps>`
  position: absolute;
  opacity: 0;
  visibility: hidden;

  &:checked + label {
    &:before {
      border-color: ${({theme, disabled}) =>
        disabled
          ? theme.colors.selectorDisabledBorderColor
          : theme.colors.radioBorderActiveColor};
    }

    &:after {
      background-color: ${({theme, disabled}) =>
        disabled
          ? theme.colors.checkboxBackgroundColor
          : theme.colors.selectorBackgroundColor};
    }
  }
`;

export const StyledRadioLabel = styled.label<StyledRadioProps>`
  position: relative;
  user-select: none;
  cursor: ${({disabled}) => (disabled ? 'default' : 'pointer')};
  pointer-events: ${({disabled}) => (disabled ? 'none' : 'default')};

  &:before {
    content: '';
    width: 12px;
    height: 12px;
    border: 1px solid
      ${({theme, disabled}) =>
        disabled
          ? theme.colors.selectorDisabledBorderColor
          : theme.colors.selectorBorderColor};
    border-radius: 50%;
    display: block;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }

  &:after {
    content: '';
    width: 8px;
    height: 8px;
    background-color: transparent;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 3px;
    transform: translateY(-50%);
  }
`;

export const StyledRadioLabelText = styled.span<StyledRadioProps>`
  color: ${({theme}) => theme.colors.text};
  font-size: ${({theme}) => theme.typography.fontSizes.md};
  margin-left: 24px;
`;
