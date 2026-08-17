import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Dropdown from './';
import {StatMinusIcon} from '../../assets/icons';

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  args: {
    onSelect: action('on-select'),
  },
  argTypes: {
    listSize: {
      control: {type: 'select'},
      options: ['sm', 'md', 'lg'],
    },
    size: {
      control: {type: 'select'},
      options: ['content', 'full'],
    },
    list: {
      control: false,
      description:
        'Array of options to render: `{ title: string; id: string; icon?: ReactNode }[]`. Not editable via Controls since `icon` can hold a React node — set it directly in the story args.',
    },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Select',
    size: 'content',
    withIcon: true,
    list: [
      {title: 'Option 1', id: 'option-1', icon: <StatMinusIcon />},
      {title: 'Option 2', id: 'option-2', icon: <StatMinusIcon />},
      {title: 'Option 3', id: 'option-3'},
    ],
    isChooseSelect: true,
    listSize: 'sm',
    disabled: false,
  },
};
