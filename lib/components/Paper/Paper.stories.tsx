import type {Meta, StoryObj} from '@storybook/react';
import Paper from './';
import {lightTheme} from '../../themes';
import {gaps} from '../../themes/gaps';

const meta = {
  title: 'Components/Paper',
  component: Paper,
  tags: ['autodocs'],
  argTypes: {
    bg: {
      control: {type: 'select'},
      options: Object.keys(lightTheme.colors),
    },
    rounded: {
      control: {type: 'select'},
      options: Object.keys(gaps),
    },
    padding: {
      control: {type: 'select'},
      options: Object.keys(gaps),
    },
    elevation: {
      control: {type: 'select'},
      options: [1, 2, 3, 4, 5],
    },
  },
} satisfies Meta<typeof Paper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate ut pharetra sit amet aliquam id. Sit amet nulla facilisi morbi tempus iaculis.',
    elevation: 1,
    padding: 'md',
    bg: 'background',
  },
};
