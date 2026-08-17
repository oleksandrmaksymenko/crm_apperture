import type {Meta, StoryObj} from '@storybook/react';
import SelectorGroup from './';
import Checkbox from '../Checkbox';
import Radio from '../Radio';
import Switcher from '../Switcher';

const meta = {
  title: 'Components/SelectorGroup',
  component: SelectorGroup,
  tags: ['autodocs'],
  args: {
    gap: 'md',
    direction: 'vertical',
  },
  argTypes: {
    component: {
      control: false,
      description:
        'Template element to clone for every entry in `group`, e.g. `<Checkbox />`, `<Radio />`, or `<Switcher />`.',
    },
    group: {
      control: false,
      description:
        'Array of props cloned onto `component` for each item: `{ id, label, name?, disabled? }[]`. Not editable via Controls — set it directly in the story args.',
    },
  },
} satisfies Meta<typeof SelectorGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

const namedGroup = (name: string) => [
  {id: 'checkboxGroup', label: 'Checkbox Group', name, disabled: true},
  {id: 'checkboxGroup2', label: 'Checkbox Group 2', name},
  {id: 'checkboxGroup3', label: 'Checkbox Group 3', name},
  {id: 'checkboxGroup4', label: 'Checkbox Group 4', name},
];

export const CheckboxView: Story = {
  args: {
    component: <Checkbox />,
    group: [
      {id: 'checkboxGroup', label: 'Checkbox Group'},
      {id: 'checkboxGroup2', label: 'Checkbox Group 2'},
      {id: 'checkboxGroup3', label: 'Checkbox Group 3'},
      {id: 'checkboxGroup4', label: 'Checkbox Group 4'},
    ],
  },
};

export const RadioView: Story = {
  args: {
    component: <Radio />,
    group: namedGroup('radioGroup1'),
  },
};

export const SwitcherView: Story = {
  args: {
    component: <Switcher id='' isChecked={false} onChange={() => {}} />,
    group: namedGroup('radioGroup1'),
  },
};
