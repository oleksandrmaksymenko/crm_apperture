import {Meta, StoryFn} from '@storybook/react';
import {IconsType, CheckIcon} from '../../assets/icons';

export default {
  title: 'Assets/Icons',
  component: CheckIcon,
} as Meta;

const Template: StoryFn<IconsType> = args => <CheckIcon {...args} />;

export const Check = Template.bind({});
Check.args = {
  fill: 'red',
};

Check.argTypes = {
  fill: {control: {type: 'color', presetColors: ['red', 'green']}},
};
