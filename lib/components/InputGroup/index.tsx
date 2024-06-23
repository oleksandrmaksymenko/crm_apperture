import {StyledInputGroup} from './InputGroup.styled';

export type InputGroupProps = {
  direction: 'row' | 'col' | 'row-reverse';
};

const InputGroup = (props: InputGroupProps) => (
  <StyledInputGroup {...props}>Input Group</StyledInputGroup>
);

export default InputGroup;
