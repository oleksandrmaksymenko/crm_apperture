import type {Meta, StoryObj} from '@storybook/react';
import Link from '.';
import {typography} from '../../themes/typography';

const meta = {
  title: 'Components/Link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {
    underline: {
      control: {type: 'select'},
      options: ['hover', 'always', 'disabled'],
    },
    size: {
      control: {type: 'select'},
      options: Object.keys(typography.fontMixin),
    },
    selected: {
      control: {type: 'boolean'},
    },
    href: {
      control: false,
    },
  },
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Lorem ipsum link',
    href: '#',
    size: 'sm',
    selected: false,
  },
};
