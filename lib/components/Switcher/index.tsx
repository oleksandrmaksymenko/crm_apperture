import {
  StyledLabelText,
  StyledSwitcherContainer,
  StyledSwitcherInput,
  StyledSwitcherLabel,
} from './Switcher.styled.tsx';

export type SwitcherProps = {
  id: string;
  isChecked: boolean;
  onChange: (value: boolean) => void;
} & Partial<{
  label: string;
  disabled: boolean;
}>;

const Switcher = ({
  label,
  id,
  disabled,
  isChecked,
  ...props
}: SwitcherProps) => (
  <StyledSwitcherContainer>
    <StyledSwitcherInput
      type='checkbox'
      disabled={disabled}
      checked={isChecked}
      id={`${id}-switcher`}
      {...props}
    />
    <StyledSwitcherLabel htmlFor={`${id}-switcher`} disabled={disabled}>
      {label && <StyledLabelText>{label}</StyledLabelText>}
    </StyledSwitcherLabel>
  </StyledSwitcherContainer>
);

export default Switcher;
