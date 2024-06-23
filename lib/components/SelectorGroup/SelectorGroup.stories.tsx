import {Meta, StoryFn} from '@storybook/react';
import SelectorGroup, {SelectorGroupProps} from './';
import Checkbox from '../Checkbox';
import Radio from '../Radio';
import Switcher from '../Switcher';

export default {
  title: 'Components/SelectorGroup',
  component: SelectorGroup,
} as Meta;

const Template: StoryFn<SelectorGroupProps> = args => (
  <SelectorGroup {...args} />
);

export const CheckboxView = Template.bind({});
CheckboxView.args = {
  component: <Checkbox />,
  group: [
    {
      id: 'checkboxGroup',
      label: 'Checkbox Group',
    },
    {
      id: 'checkboxGroup2',
      label: 'Checkbox Group 2',
    },
    {
      id: 'checkboxGroup3',
      label: 'Checkbox Group 3',
    },
    {
      id: 'checkboxGroup4',
      label: 'Checkbox Group 4',
    },
  ],
  gap: 'md',
  direction: 'vertical',
};

export const RadioView = Template.bind({});
RadioView.args = {
  component: <Radio />,
  group: [
    {
      id: 'checkboxGroup',
      label: 'Checkbox Group',
      name: 'radioGroup1',
      disabled: true,
    },
    {
      id: 'checkboxGroup2',
      label: 'Checkbox Group 2',
      name: 'radioGroup1',
    },
    {
      id: 'checkboxGroup3',
      label: 'Checkbox Group 3',
      name: 'radioGroup1',
    },
    {
      id: 'checkboxGroup4',
      label: 'Checkbox Group 4',
      name: 'radioGroup1',
    },
  ],
  gap: 'md',
  direction: 'vertical',
};

export const SwitcherView = Template.bind({});
SwitcherView.args = {
  component: <Switcher />,
  group: [
    {
      id: 'checkboxGroup',
      label: 'Checkbox Group',
      name: 'radioGroup1',
      disabled: true,
    },
    {
      id: 'checkboxGroup2',
      label: 'Checkbox Group 2',
      name: 'radioGroup1',
    },
    {
      id: 'checkboxGroup3',
      label: 'Checkbox Group 3',
      name: 'radioGroup1',
    },
    {
      id: 'checkboxGroup4',
      label: 'Checkbox Group 4',
      name: 'radioGroup1',
    },
  ],
  gap: 'md',
  direction: 'vertical',
};

CheckboxView.argTypes = {};
RadioView.argTypes = {};
SwitcherView.argTypes = {};
