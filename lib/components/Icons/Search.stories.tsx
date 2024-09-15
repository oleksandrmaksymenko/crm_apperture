import {Meta, StoryFn} from '@storybook/react';
import {SearchIcon, IconsType} from '../../assets/icons';

export default {
  title: 'Assets/Icons',
  component: SearchIcon,
} as Meta;

const Template: StoryFn<IconsType> = args => <SearchIcon {...args} />;

export const Search = Template.bind({});
Search.args = {
  fill: 'red',
};

Search.argTypes = {
  fill: {control: {type: 'color', presetColors: ['red', 'green']}},
};
