import styled from '@emotion/styled';
import {SwitcherProps} from './index.tsx';
import {ThemeProps} from '../../themes';

type StyledSwitcherProps = SwitcherProps & ThemeProps;

export const StyledSwitcherContainer = styled.div<StyledSwitcherProps>``;

export const StyledSwitcherInput = styled.input<StyledSwitcherProps>`
  position: absolute;
  opacity: 0;
  pointer-events: none;
  visibility: hidden;

  &:checked {
    & + label {
      &:after {
        left: 12px;
      }
    }
  }
`;

export const StyledSwitcherLabel = styled.label<StyledSwitcherProps>`
  position: relative;
  user-select: none;
  cursor: pointer;

  &:before {
    content: '';
    width: 30px;
    height: 20px;
    background-color: ${({theme, disabled}) =>
      disabled
        ? theme.colors.switcherDisabledBackgroundColor
        : theme.colors.switcherBackgroundColor};
    border: 1px solid
      ${({theme, disabled}) =>
        disabled
          ? theme.colors.switcherDisabledBorderColor
          : theme.colors.selectorBorderColor};
    border-radius: 20px;
    position: absolute;
    top: 0;
    left: 0;
  }

  &:after {
    content: '';
    width: 18px;
    height: 18px;
    background-color: ${({theme, disabled}) =>
      disabled
        ? theme.colors.switcherDisabledBackground
        : theme.colors.switcherBackground};
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: 2px;
    transition: left ${({theme}) => theme.transition};
  }
`;

export const StyledLabelText = styled.span<StyledSwitcherProps>`
  margin-left: 44px;
  color: ${({theme}) => theme.colors.text};
  font-size: ${({theme}) => theme.typography.fontSizes.md};
`;
