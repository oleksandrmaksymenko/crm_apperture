import {Meta, StoryFn} from '@storybook/react';
import Avatar, {AvatarProps} from './';

export default {
  title: 'Components/Avatar',
  component: Avatar,
} as Meta;

const Template: StoryFn<AvatarProps> = args => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: 'Oleksandr Maksymenko',
  size: 'large',
  variant: 'circle',
  notificationCount: 4,
};

Primary.argTypes = {
  notificationCount: {
    control: {type: 'number'},
  },
};
