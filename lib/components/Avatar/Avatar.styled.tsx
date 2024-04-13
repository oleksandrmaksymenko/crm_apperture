import styled from '@emotion/styled';
import {AvatarProps} from './index.tsx';

const sizes = {
  small: '24px',
  medium: '40px',
  large: '56px',
};

const variants = {
  circle: '50%',
  rounded: '4px',
};

export const StyledAvatar = styled.div<
  AvatarProps & Partial<{backgroundColor: string; color: string}>
>(props => ({
  color: props.color,
  backgroundColor: props.backgroundColor,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  ...(props.size && {width: sizes[props.size]}),
  ...(props.size && {height: sizes[props.size]}),
  ...(props.variant && {borderRadius: variants[props.variant]}),

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',

    ...(props.variant && {borderRadius: variants[props.variant]}),
  },
}));

export const StyledAvatarBadge = styled.div<{isBool: boolean}>`
  position: absolute;
  bottom: -6px;
  right: -6px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  ${({isBool}) => isBool && 'background-color: #f33;'}
`;
