import {useState} from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Radio from './';

const meta = {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A single radio input. Group several with the same `name` and distinct `value`s to build a mutually-exclusive group — see the Interactive story.',
      },
    },
  },
  args: {
    onChange: action('on-change'),
  },
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    id: 'test-input',
    label: 'Company name',
    name: 'Oleksandr',
    disabled: false,
    isChecked: true,
  },
};

export const Interactive: Story = {
  render: () => {
    const [selected, setSelected] = useState('small');
    const plans = [
      {value: 'small', label: 'Small'},
      {value: 'medium', label: 'Medium'},
      {value: 'large', label: 'Large'},
    ];

    return (
      <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
        {plans.map(plan => (
          <Radio
            key={plan.value}
            id={`plan-${plan.value}`}
            name='plan'
            value={plan.value}
            label={plan.label}
            isChecked={selected === plan.value}
            onChange={e => setSelected(e.target.value)}
          />
        ))}
      </div>
    );
  },
};
