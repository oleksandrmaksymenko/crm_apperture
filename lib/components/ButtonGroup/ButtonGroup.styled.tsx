import styled from '@emotion/styled';
import {ButtonGroupProps} from './';

type StyledButtonGroupProps = Pick<
  ButtonGroupProps,
  'direction' | 'gap' | 'position' | 'bottomGutter'
> &
  Partial<{
    theme: {
      spacing: {
        [key: string]: string;
      };
    };
  }>;

export const StyledButtonGroup = styled.div<StyledButtonGroupProps>(props => {
  const isVertical = props.direction === 'vertical';

  return {
    ...(props.bottomGutter && {
      marginBottom: props.theme.spacing[props.bottomGutter],
    }),
    display: 'flex',
    flexDirection: isVertical ? 'column' : 'row',
    gap: props.gap,
    ...(isVertical && {alignItems: props.position}),
    ...(!isVertical && {justifyContent: props.position}),
  };
});
