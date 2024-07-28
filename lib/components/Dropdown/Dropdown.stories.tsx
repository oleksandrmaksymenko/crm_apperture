import {Meta, StoryFn} from '@storybook/react';
import Dropdown, {DropdownProps} from './';
import {StatMinusIcon} from '../../assets/icons';
import {action} from '@storybook/addon-actions';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as Meta;

const Template: StoryFn<DropdownProps> = args => <Dropdown {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Select',
  size: 'full',
  withoutIcon: true,
  list: [
    {
      title: 'Option 1',
      id: 'option-1',
      icon: <StatMinusIcon />,
    },
    {
      title: 'Option 2',
      id: 'option-2',
      icon: <StatMinusIcon />,
    },
    {
      title: 'Option 3',
      id: 'option-3',
    },
  ],
  onSelect: action('on-select'),
  isChooseSelect: true,
  listSize: 'sm',
  disabled: false,
};

Primary.argTypes = {};
