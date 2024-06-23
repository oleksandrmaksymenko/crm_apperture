import {Meta, StoryFn} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Switcher, {SwitcherProps} from './';

export default {
  title: 'Components/Switcher',
  component: Switcher,
} as Meta;

const Template: StoryFn<SwitcherProps> = args => <Switcher {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  onChange: action('on-change'),
  disabled: true,
  isChecked: true,
  label: 'Company name',
};

Primary.argTypes = {};
