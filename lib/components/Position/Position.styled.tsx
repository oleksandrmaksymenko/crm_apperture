import styled from '@emotion/styled';
import {ThemeProps} from '../../themes';
import type {PositionProps} from '.';

type PositionStyleProps = PositionProps & ThemeProps;

const positionFormatter = (position: PositionProps['placement']) => {
  console.log(position);
  if (position === 'top') return {top: 0};
  if (position === 'top-end') return {top: 0, right: 0};
  if (position === 'top-start') return {top: 0, left: 0};
  if (position === 'top-center')
    return {
      top: 0,
      right: '50%',
      left: '50%',
      transform: 'translate(-50%, 0)',
    };

  if (position === 'right') return {right: 0};
  if (position === 'right-end') return {right: 0, bottom: 0};
  if (position === 'right-start') return {right: 0, top: 0};
  if (position === 'right-center')
    return {
      right: 0,
      top: '50%',
      bottom: '50%',
      transform: 'translate(0, -50%)',
    };

  if (position === 'left') return {left: 0};
  if (position === 'left-end') return {left: 0, bottom: 0};
  if (position === 'left-start') return {left: 0, top: 0};
  if (position === 'left-center')
    return {
      left: 0,
      top: '50%',
      bottom: '50%',
      transform: 'translate(0, -50%)',
    };

  if (position === 'bottom') return {bottom: 0};
  if (position === 'bottom-end') return {bottom: 0, right: 0};
  if (position === 'bottom-start') return {bottom: 0, left: 0};
  if (position === 'bottom-center')
    return {
      bottom: 0,
      right: '50%',
      left: '50%',
      transform: 'translate(-50%, 0)',
    };

  if (position === 'middle')
    return {
      top: '50%',
      right: '50%',
      bottom: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    };
};

export const StyledPosition = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const StyledPositionChildren = styled.div<PositionStyleProps>`
  width: max-content;
  height: max-content;
  position: absolute;

  ${({placement}) => positionFormatter(placement)}
`;
