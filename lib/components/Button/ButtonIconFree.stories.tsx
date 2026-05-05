import {Meta, StoryFn} from '@storybook/react';
import {fn} from '@storybook/test';
import Button, {ButtonProps} from './';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = args => <Button {...args} />;

export const PrimaryIconFree = Template.bind({});
PrimaryIconFree.args = {
  children: 'Click me',
  variant: 'primary',
  size: 'medium',
  iconPosition: 'left',
  isFullSize: false,
  onClick: fn(),
};

PrimaryIconFree.argTypes = {
  variant: {
    defaultValue: 'primary',
    control: {type: 'select'},
    options: [
      'primary',
      'secondary',
      'tertiary',
      'error',
      'warning',
      'success',
      'info',
      'outline',
      'disabled',
      'text',
    ],
  },
  size: {
    defaultValue: 'medium',
    control: {type: 'select'},
    options: ['small', 'medium', 'large', 'xlarge'],
  },
  iconPosition: {
    control: {type: 'select'},
    defaultValue: 'left',
    options: ['left', 'right'],
  },
};
