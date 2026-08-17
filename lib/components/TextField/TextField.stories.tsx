import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import TextField from './';
import {SearchIcon} from '../../assets/icons';

const meta = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A labeled text input with a floating label, optional icon, prefix/suffix, description, and error states. Fully controlled via `value`/`onChange`.',
      },
    },
  },
  args: {
    onChange: action('onChange'),
    onFocus: action('onFocus'),
    onBlur: action('onBlur'),
  },
  argTypes: {
    iconPosition: {
      control: {type: 'select'},
      options: ['left', 'right'],
    },
    placeholder: {
      control: {type: 'text'},
    },
    icon: {
      control: false,
      description: 'Icon element rendered inside the field, e.g. `<SearchIcon />`.',
    },
  },
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    id: 'company-name',
    label: 'Company name',
    placeholder: 'Write a name',
    icon: <SearchIcon fill='currentColor' />,
    iconPosition: 'left',
    description: 'Visible to your team only',
    isFullWidth: true,
  },
};

export const WithPrefixAndSuffix: Story = {
  args: {
    id: 'price',
    label: 'Price',
    prefix: '$',
    suffix: 'USD',
    isFullWidth: true,
  },
};

export const Password: Story = {
  args: {
    id: 'password',
    label: 'Password',
    type: 'password',
    isFullWidth: true,
  },
};

export const WithError: Story = {
  args: {
    id: 'email-error',
    label: 'Email',
    value: 'not-an-email',
    error: 'Enter a valid email address',
    isFullWidth: true,
  },
};

export const Disabled: Story = {
  args: {
    id: 'disabled-field',
    label: 'Company name',
    value: 'Apperture Inc.',
    disabled: true,
    isFullWidth: true,
  },
};
