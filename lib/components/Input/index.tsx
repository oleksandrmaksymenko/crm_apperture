import {useState} from 'react';

import {
  StyledInput,
  StyledInputContainer,
  StyledPrefix,
  StyledSuffix,
  StyledDescription,
  StyledError,
  StyledLabel,
  StyledIconContainer,
  StyledInputControl,
} from './Input.styled.tsx';

export type InputProps = {
  type: React.HTMLInputTypeAttribute;
  id: string;
  label: string;
} & Partial<{
  variant: 'primary' | 'outlined';
  placeholder: string;
  icon: React.ReactNode;
  iconPosition?: 'left' | 'right';
  prefix: string;
  suffix: string;
  label: string;
  description: string;
  error: string;
  isFullWidth: boolean;
  value: string;
  onChange: (arg: string) => void;
}> &
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;

const Input = ({
  id,
  description,
  prefix,
  suffix,
  icon,
  iconPosition,
  error,
  label,
  value,
  onChange,
  ...rest
}: InputProps) => {
  const [currentValue, setCurrentValue] = useState<string>(value || '');
  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    rest.onFocus && rest.onFocus(e);
    setIsFocus(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    rest.onBlur && rest.onBlur(e);
    if (currentValue.length === 0) setIsFocus(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    inputValue = inputValue.replace(/[^\dA-Za-z]/g, '');
    onChange && onChange(inputValue);

    setCurrentValue(inputValue);
  };

  return (
    <StyledInputContainer>
      <StyledInputControl>
        <StyledLabel htmlFor={id} isFocus={isFocus || currentValue !== ''}>
          {label}
        </StyledLabel>
        {icon && iconPosition === 'left' && (
          <StyledIconContainer isLeft>{icon}</StyledIconContainer>
        )}
        {prefix && <StyledPrefix>{prefix}</StyledPrefix>}
        <StyledInput
          {...rest}
          {...{id}}
          value={currentValue}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          isError={!!error}
          placeholder={isFocus && rest.placeholder}
        />
        {suffix && <StyledSuffix>{suffix}</StyledSuffix>}
        {icon && iconPosition === 'right' && (
          <StyledIconContainer>{icon}</StyledIconContainer>
        )}
        {description && !error && (
          <StyledDescription>{description}</StyledDescription>
        )}
        {error && <StyledError>{error}</StyledError>}
      </StyledInputControl>
    </StyledInputContainer>
  );
};

export default Input;
