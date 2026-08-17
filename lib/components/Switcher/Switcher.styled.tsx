import styled from '@emotion/styled';
import {SwitcherProps} from './index.tsx';

type StyledSwitcherProps = Partial<SwitcherProps>;

export const StyledSwitcherContainer = styled.div<StyledSwitcherProps>``;

export const StyledSwitcherInput = styled.input<StyledSwitcherProps>`
  position: absolute;
  opacity: 0;
  pointer-events: none;
  visibility: hidden;

  &:checked {
    & + label {
      &:before {
        background: ${({theme, disabled}) =>
          disabled
            ? theme.colors.switcherDisabledBackground
            : theme.colors.switcherBackground};
        border-color: transparent;
      }

      &:after {
        left: 16px;
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
    width: 34px;
    height: 20px;
    background: ${({theme}) => theme.colors.surface};
    border: 1px solid ${({theme}) => theme.colors.border};
    border-radius: 20px;
    position: absolute;
    top: 0;
    left: 0;
    transition:
      background-color 0.15s ease,
      border-color 0.15s ease;
  }

  &:after {
    content: '';
    width: 16px;
    height: 16px;
    background: #ffffff;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
    border-radius: 50%;
    position: absolute;
    top: 3px;
    left: 3px;
    transition: left 0.15s ease;
  }
`;

export const StyledLabelText = styled.span<StyledSwitcherProps>`
  margin-left: 46px;
  color: ${({theme}) => theme.colors.selectorLabelText};
  font-size: ${({theme}) => theme.typography.fontSizes.md};
`;
