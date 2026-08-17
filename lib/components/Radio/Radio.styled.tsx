import styled from '@emotion/styled';
import {RadioProps} from './index.tsx';

type StyledRadioProps = RadioProps;

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
  opacity: ${({disabled}) => (disabled ? 0.5 : 1)};
  pointer-events: ${({disabled}) => (disabled ? 'none' : 'default')};

  &:before {
    content: '';
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${({theme}) => theme.colors.surface};
    border: 1px solid ${({theme}) => theme.colors.border};
    display: block;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    transition: border-color 0.15s ease;
  }

  &:after {
    content: '';
    width: 8px;
    height: 8px;
    background-color: transparent;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
  }
`;

export const StyledRadioLabelText = styled.span<StyledRadioProps>`
  color: ${({theme}) => theme.colors.selectorLabelText};
  font-size: ${({theme}) => theme.typography.fontSizes.md};
  margin-left: 24px;
`;
