import {Meta, StoryFn} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import TextField, {TextFieldProps} from './';
import {SearchIcon} from '../../assets/icons';
import {deepOrange} from '../../themes/colors';

export default {
  title: 'Components/TextField',
  component: TextField,
} as Meta;

const Template: StoryFn<TextFieldProps> = args => <TextField {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Wright a name',
  onChange: action('onChange'),
  onFocus: action('onFocus'),
  onBlur: action('onBlur'),
  label: 'Company name',
  id: 'test-input',
  icon: <SearchIcon fill={deepOrange[800]} />,
  iconPosition: 'right',
  prefix: '',
  suffix: 'suffix',
  description: 'Description',
  error: '',
  isFullWidth: false,
  value: '',
};

Primary.argTypes = {
  iconPosition: {
    control: {type: 'select'},
    options: ['left', 'right'],
  },
  placeholder: {
    control: {type: 'text'},
  },
};
