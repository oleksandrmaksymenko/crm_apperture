import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import TableContainer, {TableContainerType} from './TableContainer';
import MenuList from '../Menu/MenuList';
import MenuItem from '../Menu/MenuItem';
import Position from '../Position';

const meta = {
  title: 'Components/Table',
  component: TableContainer,
  tags: ['autodocs'],
  argTypes: {
    tableConfig: {
      control: false,
      description:
        'Array of table definitions: `{ head, bodyProps, body, withCheckbox?, withActions? }[]`. Not editable via Controls — set it directly in the story args.',
    },
  },
} satisfies Meta<typeof TableContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

const RowMenu = ({close}: {close: () => void}) => {
  const select = (name: string) => () => {
    action(name)();
    close();
  };

  return (
    <Position placement='bottom-center'>
      <MenuList>
        <MenuItem onClick={select('edit')}>Edit</MenuItem>
        <MenuItem onClick={select('duplicate')}>Duplicate</MenuItem>
        <MenuItem onClick={select('delete')}>Delete</MenuItem>
      </MenuList>
    </Position>
  );
};

const tableConfig: TableContainerType['tableConfig'][] = [
  {
    head: [
      {title: 'id', sortBy: 'id'},
      {title: 'name', sortBy: 'name'},
      {title: 'companyName', sortBy: 'companyName'},
    ],
    bodyProps: {
      title: 'title',
      name: 'name',
      companyName: 'companyName',
    },
    body: [
      {title: '1', name: 'string', companyName: 'Test Name', Menu: RowMenu},
      {title: '2', name: 'string', companyName: 'Test Name', Menu: RowMenu},
      {title: '3', name: 'string', companyName: 'Test Name', Menu: RowMenu},
    ],
    withCheckbox: true,
    withActions: true,
  },
];

export const Primary: Story = {
  args: {
    tableConfig,
  },
};

export const MultipleTables: Story = {
  args: {
    tableConfig: [...tableConfig, ...tableConfig],
  },
};
