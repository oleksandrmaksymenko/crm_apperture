import {Meta, StoryFn} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Radio, {RadioProps} from './';

export default {
  title: 'Components/Radio',
  component: Radio,
} as Meta;

const Template: StoryFn<RadioProps> = args => <Radio {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  onChange: action('on-change'),
  id: 'test-input',
  label: 'Company name',
  name: 'Oleksandr',
  disabled: true,
  isChecked: true,
};

Primary.argTypes = {};
