import {Meta, StoryFn} from '@storybook/react';
import Popup, {PopupProps} from './';
import {spacing} from '../../themes/spacing';
import {sizing} from '../../themes/sizing.ts';

export default {
  title: 'Components/Popup',
  component: Popup,
} as Meta;

const Template: StoryFn<PopupProps> = args => <Popup {...args} />;

export const Primary = Template.bind({});
export const WithFooter = Template.bind({});

Primary.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate ut pharetra sit amet aliquam id. Sit amet nulla facilisi morbi tempus iaculis.',
  title: 'Popup',
  isOpen: true,
  size: 'md',
  gutter: 'md',
};

Primary.argTypes = {
  gutter: {
    control: {type: 'select'},
    options: Object.keys(spacing),
  },
  size: {
    control: {type: 'select'},
    options: Object.keys(sizing),
  },
  footer: {
    control: {type: ''},
  },
};

WithFooter.args = {
  ...Primary.args,
  footer: 'Some Footer',
};
