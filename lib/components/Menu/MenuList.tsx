import type {ReactNode} from 'react';
import {MenuListStyled} from './Menu.styled.tsx';

export type MenuListProps = {
  children: ReactNode;
};

const MenuList = ({children, ...props}: MenuListProps) => {
  return (
    <MenuListStyled role='menu' {...props}>
      {children}
    </MenuListStyled>
  );
};

export default MenuList;
