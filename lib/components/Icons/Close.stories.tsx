import {Meta, StoryFn} from '@storybook/react';
import {CloseIcon, IconsType} from '../../assets/icons';

export default {
  title: 'Assets/Icons',
  component: CloseIcon,
} as Meta;

const Template: StoryFn<IconsType> = args => <CloseIcon {...args} />;

export const Close = Template.bind({});
Close.args = {
  fill: 'red',
};

Close.argTypes = {
  fill: {control: {type: 'color', presetColors: ['red', 'green']}},
};
