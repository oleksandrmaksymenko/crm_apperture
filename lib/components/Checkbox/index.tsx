import {
  StyledCheckbox,
  StyledCheckboxContainer,
  StyledLabel,
  StyledLabelText,
} from './Checkbox.styled.tsx';
import CheckIcon from '../../assets/icons/check.tsx';

export type CheckboxProps = Partial<{
  id: string;
  label: string;
  disabled: boolean;
  isChecked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}>;

const Checkbox = ({
  id,
  label,
  disabled,
  isChecked,
  ...props
}: CheckboxProps) => (
  <StyledCheckboxContainer>
    <StyledCheckbox
      type='checkbox'
      {...props}
      id={`${id}-checkbox`}
      disabled={disabled}
      checked={isChecked}
    />
    <StyledLabel htmlFor={`${id}-checkbox`} disabled={disabled}>
      <CheckIcon />
      {label && <StyledLabelText>{label}</StyledLabelText>}
    </StyledLabel>
  </StyledCheckboxContainer>
);

export default Checkbox;
