import {Children} from 'react';
import {StyledAvatar, StyledAvatarBadge} from './Avatar.styled.tsx';

export type AvatarProps = Partial<{
  size: 'small' | 'medium' | 'large';
  variant: 'circle' | 'rounded';
  children: React.ReactNode;
  name: string;
  isBadge: boolean | React.ReactNode;
}>;

const stringToColor = (string: string) => {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
};

const hexToRgb = (hex: string) => {
  // Remove '#' if present
  hex = hex.replace('#', '');

  // Convert to 3 or 6 character format if needed
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  // Parse the hexadecimal value to RGB
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Return the RGB values as an object
  return `rgb(${r}, ${g}, ${b})`;
};

const getFontColor = (bgColor: string) => {
  const rgb = bgColor.match(/\d+/g);

  if (!rgb || rgb.length !== 3) {
    return '#000';
  }

  // @ts-ignore
  const luminance = (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255;

  // Choose white or black font color based on luminance
  return luminance > 0.5 ? '#000' : '#fff';
};

const stringAvatar = (name: string) => ({
  backgroundColor: stringToColor(name),
  color: getFontColor(hexToRgb(stringToColor(name))),
  coloredName: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
});

const Avatar = (props: AvatarProps) => {
  const imageOrDefaultAvatar = Children.toArray(props.children).map(
    (child: any) => (child.type === 'img' ? child : null),
  );

  const isBooleanBadge = typeof props.isBadge === 'boolean';

  const BadgeAvatar = () =>
    props.isBadge && (
      <StyledAvatarBadge
        isBool={isBooleanBadge}
        children={!isBooleanBadge && props.isBadge}
      />
    );

  if (props.children)
    return (
      <StyledAvatar {...props}>
        {imageOrDefaultAvatar}
        <BadgeAvatar />
      </StyledAvatar>
    );

  const avatarName = stringAvatar(props.name || '');

  return (
    <StyledAvatar
      {...props}
      backgroundColor={avatarName.backgroundColor}
      color={avatarName.color}
    >
      {avatarName.coloredName}
      <BadgeAvatar />
    </StyledAvatar>
  );
};

export default Avatar;
