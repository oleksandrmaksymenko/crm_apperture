import {useId} from 'react';
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
  value: string;
  disabled: boolean;
  isChecked: boolean;
  onChange: (arg: React.ChangeEvent<HTMLInputElement>) => void;
}>;

const Radio = ({
  id,
  label,
  name,
  value,
  disabled,
  isChecked,
  onChange,
}: RadioProps) => {
  const generatedId = useId();
  const inputId = `${id ?? generatedId}-radio`;

  return (
    <StyledRadioContainer>
      <StyledRadio
        type='radio'
        id={inputId}
        name={name}
        value={value ?? id}
        checked={isChecked}
        disabled={disabled}
        onChange={onChange}
      />
      <StyledRadioLabel htmlFor={inputId} disabled={disabled}>
        {label && <StyledRadioLabelText>{label}</StyledRadioLabelText>}
      </StyledRadioLabel>
    </StyledRadioContainer>
  );
};

export default Radio;
