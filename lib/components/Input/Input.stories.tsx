import {Meta, StoryFn} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Input, {InputProps} from './';
import {SearchIcon} from '../../assets/icons';
import {spacing} from '../../themes/spacing';
import {deepOrange} from '../../themes/colors';

export default {
  title: 'Components/Input',
  component: Input,
} as Meta;

const Template: StoryFn<InputProps> = args => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'text',
  placeholder: 'Wright a name',
  onChange: action('onChange'),
  onFocus: action('onFocus'),
  onBlur: action('onBlur'),
  label: 'Company name',
  id: 'test-input',
  icon: <SearchIcon fill={deepOrange[800]} />,
  iconPosition: 'right',
  // prefix: 'prefix',
  // suffix: 'suffix',
  description: 'Description',
  error: '',
  isFullWidth: false,
  value: '',
};

Primary.argTypes = {
  icon: {
    control: {type: ''},
  },
  iconPosition: {
    control: {type: 'select'},
    options: ['left', 'right'],
  },
  size: {
    control: {type: 'select'},
    options: Object.keys(spacing),
  },
};
