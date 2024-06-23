import Button, {ButtonProps} from '../Button';
import {StyledButtonGroup} from './ButtonGroup.styled';
import {SpacingType, ThemeColorType} from '../../global.types';
import {spacing} from '../../themes/spacing';

export type ButtonGroupProps = {
  buttons: ButtonProps[];
} & Partial<{
  gap: SpacingType;
  direction: 'vertical' | 'horizontal';
  position: 'flex-start' | 'center' | 'flex-end';
  bottomGutter: SpacingType;
  bg: ThemeColorType;
  padding: SpacingType;
  isFullWidth: boolean;
}>;

const ButtonGroup = ({
  buttons,
  direction = 'horizontal',
  gap = spacing.md,
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
