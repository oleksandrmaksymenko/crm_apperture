import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Switcher from './';

const meta = {
  title: 'Components/Switcher',
  component: Switcher,
  tags: ['autodocs'],
  args: {
    onChange: action('on-change'),
  },
} satisfies Meta<typeof Switcher>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    id: 'test',
    label: 'Company name',
    disabled: false,
    isChecked: true,
  },
};
