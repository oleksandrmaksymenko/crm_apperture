import styled from '@emotion/styled';
import {PopupProps} from '../Popup';
import {ThemeProps} from '../../themes';

type StyledButtonGroupProps = PopupProps & ThemeProps;

export const StyledButtonGroup = styled.div<StyledButtonGroupProps>(props => {
  const isVertical = props.direction === 'vertical';

  return {
    width: props.isFullWidth ? '100%' : 'max-content',
    ...(props.bottomGutter && {
      marginBottom: props.theme.gaps[props.bottomGutter],
    }),
    padding: props.theme.gaps[props.padding],
    display: 'flex',
    flexDirection: isVertical ? 'column' : 'row',
    gap: props.theme.gaps[props.gap],
    ...(isVertical && {alignItems: props.position}),
    ...(!isVertical && {justifyContent: props.position}),
    backgroundColor: props.theme.colors[props.bg],
  };
});
