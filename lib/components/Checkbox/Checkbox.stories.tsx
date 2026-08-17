import {useState} from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Checkbox from './';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: {
    onChange: action('on-change'),
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    id: 'test-checkbox',
    label: 'text',
    disabled: false,
  },
};

export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);

    return (
      <Checkbox
        id='interactive-checkbox'
        label='Accept terms and conditions'
        isChecked={checked}
        onChange={e => setChecked(e.target.checked)}
      />
    );
  },
};
