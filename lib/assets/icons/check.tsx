import {StyledPath} from './Icons.styled.tsx';
import {IconsType} from './Icons.type.ts';

const CheckIcon = ({fill, ...rest}: IconsType) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    height={24}
    viewBox='0 -960 960 960'
    width={24}
    fill={fill}
    {...rest}
  >
    <StyledPath d='M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z' />
  </svg>
);
export default CheckIcon;
