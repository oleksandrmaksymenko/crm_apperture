import type {ReactNode} from 'react';
import {MenuItemStyled} from './Menu.styled.tsx';

type MenuItemProps = {
  children: ReactNode;
  disabled?: boolean;
};

const MenuItem = ({children, ...props}: MenuItemProps) => {
  return <MenuItemStyled {...props}>{children}</MenuItemStyled>;
};

export default MenuItem;
