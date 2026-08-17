import {useState} from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Popup from './';
import Button from '../Button';
import {gaps} from '../../themes/gaps';
import {sizing} from '../../themes/sizing.ts';

const meta = {
  title: 'Components/Popup',
  component: Popup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A centered modal dialog. Renders nothing while `isOpen` is false. Closes on overlay click, the close button, or Escape.',
      },
    },
  },
  args: {
    onClose: action('on-close'),
  },
  argTypes: {
    gutter: {
      control: {type: 'select'},
      options: Object.keys(gaps),
    },
    size: {
      control: {type: 'select'},
      options: Object.keys(sizing),
    },
    footer: {
      control: false,
      description: 'Content rendered in the footer slot, e.g. action buttons.',
    },
    isOpen: {
      control: {type: 'boolean'},
      description:
        'Controls whether the popup renders at all — nothing is rendered while `false`.',
    },
  },
} satisfies Meta<typeof Popup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate ut pharetra sit amet aliquam id. Sit amet nulla facilisi morbi tempus iaculis.',
    title: 'Popup',
    isOpen: true,
    size: 'md',
    gutter: 'md',
  },
};

export const WithFooter: Story = {
  args: {
    ...Primary.args,
    footer: 'Some Footer',
  },
};

export const Interactive: Story = {
  args: {
    ...Primary.args,
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button variant='primary' size='medium' onClick={() => setIsOpen(true)}>
          Open popup
        </Button>
        <Popup
          {...args}
          isOpen={isOpen}
          onClose={() => {
            args.onClose?.();
            setIsOpen(false);
          }}
        />
      </>
    );
  },
};
