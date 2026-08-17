import type {Meta, StoryObj} from '@storybook/react';
import {
  CheckIcon,
  CloseIcon,
  HomeIcon,
  MoreVerticalIcon,
  SearchIcon,
  StatMinusIcon,
  IconsType,
} from '.';

const meta = {
  title: 'Assets/Icons',
  component: CheckIcon,
  tags: ['autodocs'],
  argTypes: {
    fill: {control: {type: 'color'}, presetColors: ['red', 'green']},
  },
} satisfies Meta<IconsType>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Check: Story = {
  render: args => <CheckIcon {...args} />,
  args: {fill: 'red'},
};

export const Close: Story = {
  render: args => <CloseIcon {...args} />,
  args: {fill: 'red'},
};

export const Home: Story = {
  render: args => <HomeIcon {...args} />,
  args: {fill: 'red'},
};

export const MoreVertical: Story = {
  render: args => <MoreVerticalIcon {...args} />,
  args: {fill: 'red'},
};

export const Search: Story = {
  render: args => <SearchIcon {...args} />,
  args: {fill: 'red'},
};

export const StatMinus: Story = {
  render: args => <StatMinusIcon {...args} />,
  args: {fill: 'red'},
};
