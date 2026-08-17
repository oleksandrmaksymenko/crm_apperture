import type {Meta, StoryObj} from '@storybook/react';
import Avatar from './';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {type: 'select'},
      options: ['medium', 'large'],
    },
    variant: {
      control: {type: 'select'},
      options: ['circle', 'rounded'],
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: 'Oleksandr Maksymenko',
    size: 'large',
    variant: 'circle',
  },
};
