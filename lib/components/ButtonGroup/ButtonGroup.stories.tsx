import {Meta, StoryFn} from '@storybook/react';
import ButtonGroup, {ButtonGroupProps} from './';
import {gaps} from '../../themes/gaps';
import {darkTheme, lightTheme} from '../../themes';

export default {
  title: 'Components/ButtonGroup',
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
  gap: gaps['sm-2'],
  bottomGutter: gaps['lg'],
  bg: darkTheme.colors.primary,
  padding: gaps['sm'],
  isFullWidth: true,
};

Primary.argTypes = {
  gap: {
    control: {type: 'select'},
    options: Object.keys(gaps),
  },
  bottomGutter: {
    control: {type: 'select'},
    options: Object.keys(gaps),
  },
  padding: {
    control: {type: 'select'},
    options: Object.keys(gaps),
  },
  bg: {
    control: {type: 'select'},
    options: Object.keys(lightTheme.colors),
  },
};
