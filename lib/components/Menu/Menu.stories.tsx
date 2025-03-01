import {Meta, StoryFn} from '@storybook/react';
import MenuList from './MenuList';
import MenuItem from './MenuItem';
import {CloseIcon} from '../../assets/icons';
import Divider from '../Divider';
import Button from '../Button';
import Link from '../Link';

export default {
  title: 'Components/Menu',
  component: MenuList,
} as Meta;

const Template: StoryFn<any> = args => {
  const handleClick = (e: {preventDefault: () => void}) => {
    e.preventDefault();
    console.log('click action');
  };
  return (
    <MenuList {...args}>
      <MenuItem>
        <CloseIcon />
        <span>close</span>
      </MenuItem>
      <MenuItem disabled>menu Item</MenuItem>
      <MenuItem>
        <Button size='small' variant='text' onClick={handleClick}>
          Button item
        </Button>
      </MenuItem>
      <MenuItem>
        <Link href='#' onClick={handleClick}>
          Test link
        </Link>
      </MenuItem>
      <MenuItem>menu Item</MenuItem>
      <Divider />
      <MenuItem>menu Item</MenuItem>
      <MenuItem>menu Item</MenuItem>
    </MenuList>
  );
};

export const Primary = Template.bind({});
Primary.args = {};

Primary.argTypes = {};
