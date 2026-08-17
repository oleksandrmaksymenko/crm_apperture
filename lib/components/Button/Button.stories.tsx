import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import Button from './';
import {MoreVerticalIcon} from '../../assets/icons';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
  argTypes: {
    variant: {
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
      control: {type: 'select'},
      options: ['small', 'medium', 'large', 'xlarge'],
    },
    iconPosition: {
      control: {type: 'select'},
      options: ['left', 'right'],
    },
    icon: {
      control: false,
      description: 'Icon element rendered next to the label, e.g. `<SearchIcon />`.',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Click me',
    variant: 'primary',
    size: 'medium',
    icon: <MoreVerticalIcon />,
    iconPosition: 'left',
    isFullSize: false,
  },
};

export const IconFree: Story = {
  args: {
    children: 'Click me',
    variant: 'primary',
    size: 'medium',
    iconPosition: 'left',
    isFullSize: false,
  },
};
