import {StyledPath} from './Icons.styled.tsx';
import {IconsType} from './Icons.type.ts';

const CloseIcon = ({fill, ...rest}: IconsType) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    height={24}
    viewBox='0 -960 960 960'
    width={24}
    {...rest}
  >
    <StyledPath
      {...{fill}}
      d='m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z'
    />
  </svg>
);
export default CloseIcon;
