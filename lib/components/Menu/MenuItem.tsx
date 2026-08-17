import type {ReactNode} from 'react';
import {MenuItemStyled} from './Menu.styled.tsx';

export type MenuItemProps = {
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
};

const MenuItem = ({children, disabled, onClick, ...props}: MenuItemProps) => {
  const handleClick = () => {
    if (!disabled) onClick?.();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick?.();
    }
  };

  return (
    <MenuItemStyled
      {...props}
      disabled={disabled}
      role='menuitem'
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      {children}
    </MenuItemStyled>
  );
};

export default MenuItem;
