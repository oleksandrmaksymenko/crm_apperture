import {Meta, StoryFn} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Checkbox, {CheckboxProps} from './';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as Meta;

const Template: StoryFn<CheckboxProps> = args => <Checkbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  onChange: action('on-change'),
  id: 'test-checkbox',
  label: 'text',
  disabled: true,
  isChecked: true,
};

Primary.argTypes = {};
