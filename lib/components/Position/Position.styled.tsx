import styled from '@emotion/styled';
import type {PositionProps} from '.';

type PositionStyleProps = PositionProps;

const positionVariants: Record<
  PositionProps['placement'],
  {justifyContent: string; alignItems: string}
> = {
  'top-end': {alignItems: 'flex-start', justifyContent: 'flex-end'},
  'top-start': {alignItems: 'flex-start', justifyContent: 'flex-start'},
  'top-center': {alignItems: 'flex-start', justifyContent: 'center'},

  'right-end': {alignItems: 'flex-end', justifyContent: 'flex-end'},
  'right-center': {alignItems: 'center', justifyContent: 'flex-end'},

  left: {alignItems: 'flex-start', justifyContent: 'flex-start'},
  'left-end': {alignItems: 'flex-end', justifyContent: 'flex-start'},
  'left-center': {alignItems: 'center', justifyContent: 'flex-start'},

  'bottom-center': {alignItems: 'flex-end', justifyContent: 'center'},

  middle: {alignItems: 'center', justifyContent: 'center'},
};

export const StyledPosition = styled.div<PositionStyleProps>`
  display: flex;
  width: 100%;
  height: 100%;

  ${({placement}) => positionVariants[placement]}
`;

export const StyledPositionChildren = styled.div`
  width: max-content;
  height: max-content;
`;
