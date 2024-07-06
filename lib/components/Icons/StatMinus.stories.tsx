import {Meta, StoryFn} from '@storybook/react';
import {StatMinusIcon, IconsType} from '../../assets/icons';

export default {
  title: 'Assets/Icons',
  component: StatMinusIcon,
} as Meta;

const Template: StoryFn<IconsType> = args => <StatMinusIcon {...args} />;

export const StatMinus = Template.bind({});
StatMinus.args = {
  fill: 'red',
};

StatMinus.argTypes = {
  fill: {control: {type: 'color', presetColors: ['red', 'green']}},
};
