import styled from '@emotion/styled';
import type {CheckboxProps} from './index.tsx';
import type {ThemeProps} from '../../themes';

type StyledCheckboxProps = CheckboxProps & ThemeProps;

export const StyledCheckboxContainer = styled.div<StyledCheckboxProps>`
  display: flex;
  align-items: center;
  gap: ${({theme, gap}) => theme.spacing[gap]};
`;

export const StyledLabel = styled.label<StyledCheckboxProps>`
  position: relative;
  cursor: ${({disabled}) => (disabled ? 'default' : 'pointer')};
  display: flex;
  align-items: center;
  user-select: none;
  pointer-events: ${({disabled}) => (disabled ? 'none' : 'default')};

  &:before {
    content: '';
    width: 14px;
    height: 14px;
    border: 1px solid
      ${({theme, disabled}) =>
        disabled
          ? theme.colors.selectorDisabledBorderColor
          : theme.colors.selectorBorderColor};
    border-radius: 4px;
    position: absolute;
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
