import {StyledPosition, StyledPositionChildren} from './Position.styled.tsx';

export type PositionProps = {
  placement:
    | 'top'
    | 'top-end'
    | 'top-start'
    | 'top-center'
    | 'right'
    | 'right-end'
    | 'right-start'
    | 'right-center'
    | 'left'
    | 'left-end'
    | 'left-start'
    | 'left-center'
    | 'bottom'
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom-center'
    | 'middle';
  children: React.ReactNode;
};

const Position = ({placement, children}: PositionProps) => {
  return (
    <StyledPosition>
      <StyledPositionChildren placement={placement}>
        {children}
      </StyledPositionChildren>
    </StyledPosition>
  );
};

export default Position;
