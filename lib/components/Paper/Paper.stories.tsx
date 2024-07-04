import {Meta, StoryFn} from '@storybook/react';
import Paper, {PaperProps} from './';
import {lightTheme} from '../../themes';
import {gaps} from '../../themes/gaps';

export default {
  title: 'Components/Paper',
  component: Paper,
} as Meta;

const Template: StoryFn<PaperProps> = args => (
  <Paper {...args}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Vulputate ut pharetra
    sit amet aliquam id. Sit amet nulla facilisi morbi tempus iaculis.
  </Paper>
);

export const Primary = Template.bind({});
Primary.args = {
  elevation: 1,
  padding: 'md',
  bg: lightTheme.colors.background,
};

Primary.argTypes = {
  bg: {
    control: {type: 'select'},
    options: Object.keys(lightTheme.colors),
  },
  rounded: {
    control: {type: 'select'},
    options: Object.keys(gaps),
    default: '',
  },
  padding: {
    control: {type: 'select'},
    options: Object.keys(gaps),
  },
};
