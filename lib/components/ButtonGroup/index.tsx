import Button, {ButtonProps} from '../Button';
import {StyledButtonGroup} from './ButtonGroup.styled';
import {SpacingType, ThemeColorType} from '../../global.types';

export type ButtonGroupProps = {
  buttons: ButtonProps[];
} & Partial<{
  gap: SpacingType;
  direction: 'vertical' | 'horizontal';
  position: 'start' | 'center' | 'end';
  bottomGutter: SpacingType;
  bg: ThemeColorType;
  padding: SpacingType;
  isFullWidth: boolean;
}>;

const ButtonGroup = ({
  buttons,
  direction = 'horizontal',
  gap = 'md',
  position,
  bottomGutter,
  ...rest
}: ButtonGroupProps) => (
  <StyledButtonGroup
    {...{direction}}
    {...{gap}}
    {...{position}}
    {...{bottomGutter}}
    {...rest}
  >
    {!!buttons.length && buttons.map(button => <Button {...button} />)}
  </StyledButtonGroup>
);

export default ButtonGroup;
