import {Meta, StoryFn} from '@storybook/react';
import Position, {PositionProps} from '.';

export default {
  title: 'Components/Position',
  component: Position,
} as Meta;

const Template: StoryFn<PositionProps> = args => (
  <div
    style={{
      width: '100%',
      height: 'calc(100vh - 2rem)',
    }}
  >
    <Position {...args} />
  </div>
);

export const Primary = Template.bind({});

Primary.args = {
  placement: 'middle',
  children: 'top-position',
};

Primary.argTypes = {
  placement: {
    control: {type: 'select'},
    options: [
      'top',
      'top-end',
      'top-start',
      'top-center',
      'right',
      'right-end',
      'right-start',
      'right-center',
      'left',
      'left-end',
      'left-start',
      'left-center',
      'bottom',
      'bottom-end',
      'bottom-start',
      'bottom-center',
      'middle',
    ],
  },
};
