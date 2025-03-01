import type {ReactNode, AnchorHTMLAttributes} from 'react';
import {StyledLink} from './Link.styled.tsx';

type PartialLinkProps = Partial<{
  underline: 'hover' | 'always';
  size: 'sm' | 'md' | 'xs' | 'lg';
}>;

type LinkProps = {
  href: string;
  children: ReactNode;
} & PartialLinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement>;

const Link = ({href, children, ...props}: LinkProps) => {
  return (
    <StyledLink href={href} {...props}>
      {children}
    </StyledLink>
  );
};

export default Link;
