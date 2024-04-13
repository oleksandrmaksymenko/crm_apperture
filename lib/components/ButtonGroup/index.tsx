import Button, {ButtonProps} from '../Button';
import {StyledButtonGroup} from './ButtonGroup.styled.tsx';
import {spacing} from '../../themes/spacing.ts';

export type ButtonGroupProps = {
  buttons: ButtonProps[];
  gap: (typeof spacing)[keyof typeof spacing];
} & Partial<{
  direction: 'vertical' | 'horizontal';
  position: 'flex-start' | 'center' | 'flex-end';
  bottomGutter: keyof typeof spacing;
}>;

const ButtonGroup = ({
  buttons,
  direction = 'horizontal',
  gap,
  position,
  bottomGutter,
}: ButtonGroupProps) => {
  return (
    <StyledButtonGroup
      direction={direction}
      gap={gap}
      position={position}
      bottomGutter={bottomGutter}
    >
      {!!buttons.length && buttons.map(button => <Button {...button} />)}
    </StyledButtonGroup>
  );
};

export default ButtonGroup;
