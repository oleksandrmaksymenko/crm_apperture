import type {ReactNode} from 'react';
import {MenuListStyled} from './Menu.styled.tsx';

type MenuListProps = {
  children: ReactNode;
};

const MenuList = ({children, ...props}: MenuListProps) => {
  return <MenuListStyled {...props}>{children}</MenuListStyled>;
};

export default MenuList;
