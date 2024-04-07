import {Meta, StoryFn} from '@storybook/react';
import Popup, {PopupProps} from './';

export default {
  children: 'Button',
  component: Popup,
} as Meta;

const Template: StoryFn<PopupProps> = args => <Popup {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Click me',
  title: 'Popup',
  isOpen: true,
};
