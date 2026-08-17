import styled from '@emotion/styled';
import {ButtonGroupProps} from './index.tsx';

export type PositionVariantsType = {
  start: string;
  end: string;
  center: string;
};

type StyledButtonGroupProps = Partial<ButtonGroupProps & PositionVariantsType>;

const positionVariants: PositionVariantsType = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
};

export const StyledButtonGroup = styled.div<StyledButtonGroupProps>(props => {
  const isVertical = props.direction === 'vertical';

  return {
    width: props.isFullWidth ? '100%' : 'max-content',
    ...(props.bottomGutter && {
      marginBottom: props.theme.gaps[props.bottomGutter],
    }),
    ...(props.padding && {padding: props.theme.gaps[props.padding]}),
    display: 'flex',
    flexDirection: isVertical ? 'column' : 'row',
    ...(props.gap && {gap: props.theme.gaps[props.gap]}),
    ...(isVertical && {
      alignItems: props.position && positionVariants[props.position],
    }),
    ...(!isVertical && {
      justifyContent: props.position && positionVariants[props.position],
    }),
  };
});
