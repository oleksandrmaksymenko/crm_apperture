import {
  StyledRadio,
  StyledRadioContainer,
  StyledRadioLabel,
  StyledRadioLabelText,
} from './Radio.styled.tsx';

export type RadioProps = Partial<{
  id: string;
  name: string;
  label: string;
  disabled: boolean;
  isChecked: boolean;
  onChange: (arg: boolean) => void;
}>;

const Radio = ({
  id,
  label,
  name,
  disabled,
  isChecked,
  ...props
}: RadioProps) => (
  <StyledRadioContainer {...props}>
    <StyledRadio
      type='radio'
      id={`${id}-radio`}
      name={name}
      checked={isChecked}
      disabled={disabled}
    />
    <StyledRadioLabel htmlFor={`${id}-radio`} disabled={disabled}>
      {label && <StyledRadioLabelText>{label}</StyledRadioLabelText>}
    </StyledRadioLabel>
  </StyledRadioContainer>
);

export default Radio;
