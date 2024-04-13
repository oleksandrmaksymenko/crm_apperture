import {Meta, StoryFn} from '@storybook/react';
import Paper, {PaperProps} from './';

export default {
  children: 'Button',
  component: Paper,
} as Meta;

const Template: StoryFn<PaperProps> = args => <Paper {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate ut pharetra sit amet aliquam id. Sit amet nulla facilisi morbi tempus iaculis.',
  elevation: 1,
  rounded: 'md',
  padding: 'md',
};
