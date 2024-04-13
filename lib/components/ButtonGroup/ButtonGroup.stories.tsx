import {Meta, StoryFn} from '@storybook/react';
import ButtonGroup, {ButtonGroupProps} from './';
import {spacing} from '../../themes/spacing';

export default {
  children: 'Button',
  component: ButtonGroup,
} as Meta;

const Template: StoryFn<ButtonGroupProps> = args => <ButtonGroup {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  buttons: [
    {
      children: 'Click me',
      variant: 'primary',
      size: 'medium',
      onClick: () => null,
    },
    {
      children: 'Click me',
      variant: 'primary',
      size: 'medium',
      onClick: () => null,
    },
  ],
  direction: 'horizontal',
  position: 'center',
  gap: spacing['sm-2'],
  bottomGutter: 'lg',
};
