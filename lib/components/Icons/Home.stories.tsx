import {Meta, StoryFn} from '@storybook/react';
import {HomeIcon, IconsType} from '../../assets/icons';

export default {
  title: 'Assets/Icons',
  component: HomeIcon,
} as Meta;

const Template: StoryFn<IconsType> = args => <HomeIcon {...args} />;

export const Home = Template.bind({});
Home.args = {
  fill: 'red',
};

Home.argTypes = {
  fill: {control: {type: 'color', presetColors: ['red', 'green']}},
};
