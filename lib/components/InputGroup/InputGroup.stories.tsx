import {Meta, StoryFn} from '@storybook/react';
import InputGroup, {InputGroupProps} from './';

export default {
  title: 'Components/InputGroup',
  component: InputGroup,
} as Meta;

const Template: StoryFn<InputGroupProps> = args => <InputGroup {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  direction: 'row',
};

Primary.argTypes = {};
