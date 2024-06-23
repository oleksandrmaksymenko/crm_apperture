import {
  StyledLabelText,
  StyledSwitcherContainer,
  StyledSwitcherInput,
  StyledSwitcherLabel,
} from './Switcher.styled.tsx';

export type SwitcherProps = Partial<{
  id: string;
  label: string;
  disabled: boolean;
  isChecked: boolean;
  onChange: (value: boolean) => void;
}> &
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;

const Switcher = ({
  label,
  id,
  disabled,
  isChecked,
  ...props
}: SwitcherProps) => {
  return (
    <StyledSwitcherContainer>
      <StyledSwitcherInput
        type='checkbox'
        disabled={disabled}
        checked={isChecked}
        {...props}
      />
      <StyledSwitcherLabel htmlFor={`${id}-switcher`} disabled={disabled}>
        {label && <StyledLabelText>{label}</StyledLabelText>}
      </StyledSwitcherLabel>
    </StyledSwitcherContainer>
  );
};

export default Switcher;
