import {Meta, StoryFn} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Button, {ButtonProps} from './';
import {MoreVerticalIcon} from '../../assets/icons';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Click me',
  variant: 'primary',
  size: 'medium',
  icon: <MoreVerticalIcon />,
  iconPosition: 'left',
  isFullSize: true,
  onClick: action('on-click'),
};

Primary.argTypes = {
  icon: {
    control: {type: 'string'},
  },
};
