import type {Meta, StoryObj} from '@storybook/react';
import ButtonGroup from './';
import {gaps} from '../../themes/gaps';

const meta = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
  argTypes: {
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
    direction: {
      control: {type: 'select'},
      options: ['vertical', 'horizontal'],
    },
    position: {
      control: {type: 'select'},
      options: ['start', 'center', 'end'],
    },
    buttons: {
      control: false,
      description:
        'Array of `ButtonProps` rendered as the group\'s buttons: `{ children, variant, size, onClick?, ... }[]`. Not editable via Controls — set it directly in the story args.',
    },
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    buttons: [
      {children: 'Click me', variant: 'primary', size: 'medium'},
      {children: 'Click me', variant: 'primary', size: 'medium'},
      {children: 'Click me', variant: 'primary', size: 'medium'},
      {children: 'Click me', variant: 'primary', size: 'medium'},
    ],
    direction: 'horizontal',
    position: 'center',
    gap: 'sm-2',
    bottomGutter: 'lg',
    padding: 'sm',
    isFullWidth: true,
  },
};
