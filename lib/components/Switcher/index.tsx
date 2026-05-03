import {
  StyledLabelText,
  StyledSwitcherContainer,
  StyledSwitcherInput,
  StyledSwitcherLabel,
} from './Switcher.styled.tsx';

export type SwitcherProps = {
  id: string;
  isChecked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & Partial<{
  label: string;
  disabled: boolean;
  dataTest: string;
}>;

const Switcher = ({
  label,
  id,
  disabled,
  isChecked,
  dataTest,
  ...props
}: SwitcherProps) => (
  <StyledSwitcherContainer>
    <StyledSwitcherInput
      type='checkbox'
      disabled={disabled}
      checked={isChecked}
      data-test={dataTest}
      id={`${id}-switcher`}
      {...props}
    />
    <StyledSwitcherLabel htmlFor={`${id}-switcher`} disabled={disabled}>
      {label && <StyledLabelText>{label}</StyledLabelText>}
    </StyledSwitcherLabel>
  </StyledSwitcherContainer>
);

export default Switcher;
