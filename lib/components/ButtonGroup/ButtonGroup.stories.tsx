import {Meta, StoryFn} from '@storybook/react';
import ButtonGroup, {ButtonGroupProps} from './';
import {spacing} from '../../themes/spacing';
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
  gap: spacing['sm-2'],
  bottomGutter: spacing['lg'],
  bg: darkTheme.colors.primary,
  padding: spacing['sm'],
  isFullWidth: true,
};

Primary.argTypes = {
  gap: {
    control: {type: 'select'},
    options: Object.keys(spacing),
  },
  bottomGutter: {
    control: {type: 'select'},
    options: Object.keys(spacing),
  },
  padding: {
    control: {type: 'select'},
    options: Object.keys(spacing),
  },
  bg: {
    control: {type: 'select'},
    options: Object.keys(lightTheme.colors),
  },
};
