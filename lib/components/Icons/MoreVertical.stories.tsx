import {Meta, StoryFn} from '@storybook/react';
import {IconsType, MoreVerticalIcon} from '../../assets/icons';

export default {
  title: 'Assets/Icons',
  component: MoreVerticalIcon,
} as Meta;

const Template: StoryFn<IconsType> = args => <MoreVerticalIcon {...args} />;

export const MoreVertical = Template.bind({});
MoreVertical.args = {
  fill: 'red',
};

MoreVertical.argTypes = {
  fill: {control: {type: 'color', presetColors: ['red', 'green']}},
};
