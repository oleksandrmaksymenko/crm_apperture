import {StyledPath} from './Icons.styled.tsx';
import {IconsType} from './Icons.type.ts';

const StatMinusIcon = ({fill, ...rest}: IconsType) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    height={24}
    viewBox='0 -960 960 960'
    width={24}
    fill={fill}
    {...rest}
  >
    <StyledPath d='M480-345 240-585l56-56 184 183 184-183 56 56-240 240Z' />
  </svg>
);
export default StatMinusIcon;
