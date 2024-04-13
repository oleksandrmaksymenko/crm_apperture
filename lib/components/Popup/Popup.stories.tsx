import {Meta, StoryFn} from '@storybook/react';
import Popup, {PopupProps} from './';
import ButtonGroup from '../ButtonGroup';
import {spacing} from '../../themes/spacing';
import {ButtonProps} from '../Button';

export default {
  children: 'Button',
  component: Popup,
} as Meta;

const buttons: ButtonProps[] = [
  {
    children: 'Cancel',
    variant: 'outline',
    size: 'medium',
    onClick: () => null,
  },
  {
    children: 'Save',
    variant: 'primary',
    size: 'medium',
    onClick: () => null,
  },
];

const Template: StoryFn<PopupProps> = args => <Popup {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate ut pharetra sit amet aliquam id. Sit amet nulla facilisi morbi tempus iaculis.',
  title: 'Popup',
  isOpen: true,
  footer: <ButtonGroup buttons={buttons} gap={spacing.sm} />,
  size: 'md',
};
