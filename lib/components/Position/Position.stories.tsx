import type {Meta, StoryObj} from '@storybook/react';
import Position from '.';

const meta = {
  title: 'Components/Position',
  component: Position,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{width: '100%', height: 'calc(100vh - 2rem)'}}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    placement: {
      control: {type: 'select'},
      options: [
        'top-end',
        'top-start',
        'top-center',
        'right-end',
        'right-center',
        'left-end',
        'left-center',
        'bottom-center',
        'middle',
      ],
    },
  },
} satisfies Meta<typeof Position>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placement: 'middle',
    children: 'top-position',
  },
};
