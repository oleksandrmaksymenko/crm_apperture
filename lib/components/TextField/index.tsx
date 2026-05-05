import {useRef, useState} from 'react';

import {
  StyledTextField,
  StyledTextFieldContainer,
  StyledPrefix,
  StyledSuffix,
  StyledDescription,
  StyledError,
  StyledLabel,
  StyledIconContainer,
  StyledTextFieldControl,
} from './TextField.styled.tsx';

export type TextFieldProps = {
  id: string;
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
  const [currentValue, setCurrentValue] = useState<string>(value || '');
  const [isFocus, setIsFocus] = useState(false);
  const prefixSuffixRef = useRef<HTMLDivElement>(null);

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

  const isIconLeftPosition: boolean = !!icon && iconPosition === 'left';
  const placeholderWiver = () => {
    if (isFocus && rest.placeholder) return rest.placeholder;
    if (!label && rest.placeholder) return rest.placeholder;
    if (label && !isFocus) return '';
    return rest.placeholder;
  };

  return (
    <StyledTextFieldContainer isFullWidth={rest.isFullWidth}>
      <StyledTextFieldControl>
        <StyledLabel
          htmlFor={id}
          isFocus={isFocus || currentValue !== ''}
          isLeftIconPosition={isIconLeftPosition}
          isPrefix={!!prefix}
        >
          {label}
        </StyledLabel>
        {isIconLeftPosition && (
          <StyledIconContainer isLeft>{icon}</StyledIconContainer>
        )}
        {prefix && !suffix && (
          <StyledPrefix useRef={prefixSuffixRef}>{prefix}</StyledPrefix>
        )}
        <StyledTextField
          {...rest}
          {...{id}}
          value={currentValue}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          isError={!!error}
          placeholder={placeholderWiver()}
          type='text'
          isLeftIconPosition={isIconLeftPosition}
          isPrefix={!!prefix}
        />
        {suffix && !prefix && (
          <StyledSuffix useRef={prefixSuffixRef}>{suffix}</StyledSuffix>
        )}
        {!suffix && icon && iconPosition === 'right' && (
          <StyledIconContainer>{icon}</StyledIconContainer>
        )}
        {description && !error && (
          <StyledDescription>{description}</StyledDescription>
        )}
        {error && <StyledError>{error}</StyledError>}
      </StyledTextFieldControl>
    </StyledTextFieldContainer>
  );
};

export default TextField;
