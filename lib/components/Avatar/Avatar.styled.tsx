import styled from '@emotion/styled';
import {AvatarProps} from './index.tsx';
import {ThemeProps} from '../../themes';

const sizes = {
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

export const StyledAvatarBadge = styled.div<
  {
    notificationColor: AvatarProps['notificationColor'];
  } & ThemeProps
>`
  padding: 0 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -6px;
  left: 70%;
  min-width: 24px;
  height: 24px;
  border-radius: 12px;
  background-color: ${({theme}) => theme.colors.notification};
  color: ${({theme}) => theme.text.primary};
  font-size: ${({theme}) => theme.typography.fontSizes.xs};
`;
