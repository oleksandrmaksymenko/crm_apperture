import {Meta, StoryFn} from '@storybook/react';
import TableContainer, {TableContainerProps} from './TableContainer';

export default {
  title: 'Components/Table',
  component: TableContainer,
} as Meta;

const tableConfig = [
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
      companyName2: 'companyName2',
    },
    body: [
      {
        title: '1',
        name: 'string',
        companyName: 'Test Name',
        companyName2: 'Test Name2',
      },
      {
        title: '1',
        name: 'string',
        companyName: 'Test Name',
        companyName2: 'Test Name2',
      },
      {
        title: '1',
        name: 'string',
        companyName: 'Test Name',
        companyName2: 'Test Name2',
      },
      {
        title: '1',
        name: 'string',
        companyName: 'Test Name',
        companyName2: 'Test Name2',
      },
      {
        title: '1',
        name: 'string',
        companyName: 'Test Name',
        companyName2: 'Test Name2',
      },
    ],
  },
];

const Template: StoryFn<TableContainerProps> = args => (
  <TableContainer {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  tableConfig,
};

Primary.argTypes = {};
