import {Meta, StoryFn} from '@storybook/react';
import Divider from './';

export default {
  title: 'Components/Divider',
  component: Divider,
} as Meta;

const Template: StoryFn = args => <Divider {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

Primary.argTypes = {};
