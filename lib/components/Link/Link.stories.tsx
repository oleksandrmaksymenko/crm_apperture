import {Meta, StoryFn} from '@storybook/react';
import Link from '.';
import {typography} from '../../themes/typegraphy';

export default {
  title: 'Components/Link',
  component: Link,
} as Meta;

const Template: StoryFn<any> = args => <Link {...args}>Lorem ipsum link</Link>;

export const Primary = Template.bind({});
Primary.args = {
  href: '#',
  underline: '',
  size: 'sm',
};

Primary.argTypes = {
  size: {
    control: {type: 'select'},
    options: Object.keys(typography.fontMixin),
  },
};
