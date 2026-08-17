import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import MenuList from './MenuList';
import MenuItem from './MenuItem';
import {CloseIcon} from '../../assets/icons';
import Divider from '../Divider';
import Button from '../Button';
import Link from '../Link';

const preventDefault = (e: {preventDefault: () => void}) => e.preventDefault();

const meta = {
  title: 'Components/Menu',
  component: MenuList,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A menu list built from `MenuItem`/`Divider`. Items are focusable and clickable via `onClick` — no need to wrap them in a `Button` unless you need native button semantics.',
      },
    },
  },
  argTypes: {
    children: {
      control: false,
      description:
        'Menu content — a list of `MenuItem`/`Divider` elements. Defined via the story `render` function below, not editable via Controls.',
    },
  },
} satisfies Meta<typeof MenuList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {children: null},
  render: args => (
    <MenuList {...args}>
      <MenuItem onClick={action('close-clicked')}>
        <CloseIcon />
        <span>close</span>
      </MenuItem>
      <MenuItem disabled>menu Item</MenuItem>
      <MenuItem>
        <Button size='small' variant='text' onClick={preventDefault}>
          Button item
        </Button>
      </MenuItem>
      <MenuItem>
        <Link href='#' onClick={preventDefault}>
          Test link
        </Link>
      </MenuItem>
      <MenuItem onClick={action('menu-item-1-clicked')}>menu Item</MenuItem>
      <Divider />
      <MenuItem onClick={action('menu-item-2-clicked')}>menu Item</MenuItem>
      <MenuItem onClick={action('menu-item-3-clicked')}>menu Item</MenuItem>
    </MenuList>
  ),
};
