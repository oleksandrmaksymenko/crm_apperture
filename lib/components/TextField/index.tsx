import {useEffect, useId, useState} from 'react';

import {
  StyledTextField,
  StyledTextFieldContainer,
  StyledTextFieldControl,
  StyledInputRow,
  StyledAffix,
  StyledDescription,
  StyledError,
  StyledLabel,
  StyledIconContainer,
} from './TextField.styled.tsx';

export type TextFieldProps = {
  id: string;
} & Partial<{
  variant: 'primary' | 'outlined';
  placeholder: string;
  icon: React.ReactNode;
  iconPosition: 'left' | 'right';
  prefix: string;
  suffix: string;
  label: string;
  description: string;
  error: string;
  isFullWidth: boolean;
  value: string;
  onChange: (arg: string) => void;
}> &
  Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    'onChange'
  >;

const TextField = ({
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
}: TextFieldProps) => {
  const [currentValue, setCurrentValue] = useState(value || '');
  const [isFocus, setIsFocus] = useState(false);
  const hintId = useId();

  useEffect(() => {
    if (value !== undefined) setCurrentValue(value);
  }, [value]);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    rest.onFocus?.(e);
    setIsFocus(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    rest.onBlur?.(e);
    if (currentValue.length === 0) setIsFocus(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    onChange?.(inputValue);
    setCurrentValue(inputValue);
  };

  const isLeftIcon = !!icon && iconPosition === 'left';
  const isRightIcon = !!icon && iconPosition !== 'left';
  const hasHint = !!(description || error);

  const resolvePlaceholder = () => (label && !isFocus ? '' : rest.placeholder);

  return (
    <StyledTextFieldContainer isFullWidth={rest.isFullWidth}>
      <StyledTextFieldControl isError={!!error} disabled={rest.disabled}>
        <StyledLabel
          htmlFor={id}
          isFocus={isFocus || currentValue !== ''}
          isLeftIconPosition={isLeftIcon}
          isPrefix={!!prefix}
        >
          {label}
        </StyledLabel>
        <StyledInputRow>
          {isLeftIcon && <StyledIconContainer>{icon}</StyledIconContainer>}
          {prefix && <StyledAffix>{prefix}</StyledAffix>}
          <StyledTextField
            {...rest}
            id={id}
            value={currentValue}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder={resolvePlaceholder()}
            type={rest.type || 'text'}
            aria-invalid={!!error || undefined}
            aria-describedby={hasHint ? hintId : undefined}
          />
          {suffix && <StyledAffix>{suffix}</StyledAffix>}
          {isRightIcon && <StyledIconContainer>{icon}</StyledIconContainer>}
        </StyledInputRow>
      </StyledTextFieldControl>
      {description && !error && (
        <StyledDescription id={hintId}>{description}</StyledDescription>
      )}
      {error && (
        <StyledError id={hintId} role='alert'>
          {error}
        </StyledError>
      )}
    </StyledTextFieldContainer>
  );
};

export default TextField;
