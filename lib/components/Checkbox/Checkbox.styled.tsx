import styled from '@emotion/styled';
import type {CheckboxProps} from './index.tsx';

type StyledCheckboxProps = CheckboxProps;

export const StyledCheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledLabel = styled.label<StyledCheckboxProps>`
  position: relative;
  cursor: ${({disabled}) => (disabled ? 'default' : 'pointer')};
  display: flex;
  align-items: center;
  user-select: none;
  opacity: ${({disabled}) => (disabled ? 0.5 : 1)};
  pointer-events: ${({disabled}) => (disabled ? 'none' : 'default')};

  &:before {
    content: '';
    width: 16px;
    height: 16px;
    border-radius: 5px;
    background: ${({theme}) => theme.colors.surface};
    border: 1px solid ${({theme}) => theme.colors.border};
    position: absolute;
    transition:
      background-color 0.15s ease,
      border-color 0.15s ease;
  }

  & > svg {
    position: absolute;
    top: 50%;
    left: 1px;
    transform: translateY(-50%);
    visibility: hidden;
  }
`;

export const StyledCheckbox = styled.input<StyledCheckboxProps>`
  position: absolute;
  opacity: 0;
  visibility: hidden;

  &:checked {
    & + label {
      &:before {
        background-color: ${({theme, disabled}) =>
          disabled
            ? theme.colors.selectorDisabledBackgroundColor
            : theme.colors.selectorBackgroundColor};
        border-color: transparent;
      }

      svg {
        fill: ${({theme, disabled}) =>
          disabled
            ? theme.colors.checkboxDisabledSvgFill
            : theme.colors.checkboxSvgFill};
        width: 16px;
        visibility: visible;
      }
    }
  }
`;

export const StyledLabelText = styled.span<StyledCheckboxProps>`
  margin-left: 24px;
  color: ${({theme}) => theme.colors.selectorLabelText};
  font-size: ${({theme}) => theme.typography.fontSizes.md};
`;
