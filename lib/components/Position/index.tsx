import {StyledPosition, StyledPositionChildren} from './Position.styled.tsx';

export type PositionProps = {
  placement:
    | 'top-end'
    | 'top-start'
    | 'top-center'
    | 'right-end'
    | 'right-center'
    | 'left'
    | 'left-end'
    | 'left-center'
    | 'bottom-center'
    | 'middle';
  children: React.ReactNode;
};

const Position = ({placement, children}: PositionProps) => {
  return (
    <StyledPosition placement={placement}>
      <StyledPositionChildren>{children}</StyledPositionChildren>
    </StyledPosition>
  );
};

export default Position;
