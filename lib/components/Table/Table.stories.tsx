import {Meta, StoryFn} from '@storybook/react';
import TableContainer, {
  TableContainerType,
  TableContainerTypeProps,
} from './TableContainer';
import MenuList from '../Menu/MenuList';
import MenuItem from '../Menu/MenuItem';
import Position from '../Position';

export default {
  title: 'Components/Table',
  component: TableContainer,
} as Meta;

const tableConfig: TableContainerType['tableConfig'][] = [
  {
    head: [
      {
        title: 'id',
        sortBy: 'id',
        onClick: (arg?: unknown) => arg,
      },
      {
        title: 'name',
        sortBy: 'name',
        onClick: (arg?: unknown) => arg,
      },
      {
        title: 'companyName',
        sortBy: 'companyName',
        onClick: (arg?: unknown) => arg,
      },
    ],
    bodyProps: {
      title: 'title',
      name: 'name',
      companyName: 'companyName',
    },
    body: [
      {
        title: '1',
        name: 'string',
        companyName: 'Test Name',
        Menu: () => (
          <Position placement='top-end'>
            <MenuList>
              <MenuItem>First Item</MenuItem>
              <MenuItem>First Item</MenuItem>
              <MenuItem>First Item</MenuItem>
              <MenuItem>First Item</MenuItem>
              <MenuItem>First Item</MenuItem>
              <MenuItem>First Item</MenuItem>
            </MenuList>
          </Position>
        ),
      },
      {
        title: '2',
        name: 'string',
        companyName: 'Test Name',
      },
      {
        title: '3',
        name: 'string',
        companyName: 'Test Name',
      },
    ],
    withCheckbox: false,
    withActions: true,
  },
];

const Template: StoryFn<TableContainerTypeProps> = args => (
  <TableContainer {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  tableConfig,
};

Primary.argTypes = {};
