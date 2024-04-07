import {Meta, StoryFn} from '@storybook/react';
import Button, {ButtonProps} from './';
import {CloseIcon} from '../../assets/icons';

export default {
  children: 'Button',
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Click me',
  variant: 'primary',
  size: 'medium',
  icon: <CloseIcon />,
  iconPosition: 'left',
};
