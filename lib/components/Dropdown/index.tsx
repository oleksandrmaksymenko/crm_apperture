import {useState} from 'react';
import {
  StyledDropdownContainer,
  StyledDropdownLabelText,
  StyledDropdownListContainer,
  StyledDropdownListItem,
  StyledDropdownToggle,
  StyledIconContainer,
} from './Dropdown.styled.tsx';
import {StatMinusIcon} from '../../assets/icons';
import {useTheme} from '@emotion/react';
import {ThemeProps} from '../../themes';

export type DropdownProps = {
  label: string;
  onSelect: (arg: {value: string; id: string}) => void;
  list: {
    title: string;
    id: string;
    icon?: React.ReactNode;
  }[];
} & Partial<{
  size: 'full' | 'content';
  listSize: 'sm' | 'md' | 'lg';
  withoutIcon: boolean;
  disabled: boolean;
  isChooseSelect: boolean;
}>;

const Dropdown = ({
  label,
  withoutIcon,
  list,
  onSelect,
  isChooseSelect,
  listSize = 'md',
  size,
  ...rest
}: DropdownProps) => {
  const [labelText, setLabelText] = useState<string>(label);
  const [isDropdownShow, setIsDropdownShow] = useState(false);
  const {colors} = useTheme() as ThemeProps;

  const toggleDropdown = () => {
    setIsDropdownShow(!isDropdownShow);
  };

  const handleSelect = (e: React.BaseSyntheticEvent<HTMLDivElement>) => {
    const value = e.target.attributes['data-selected']?.textContent;
    const id = e.target.id;
    if (value || id) {
      console.log(value, id);
      onSelect({value, id});
      if (isChooseSelect) setLabelText(value);
      setIsDropdownShow(false);
    }
  };

  return (
    <StyledDropdownContainer {...{size}} {...rest}>
      <StyledDropdownLabelText onClick={toggleDropdown} {...{listSize}}>
        {labelText}
        {!withoutIcon && (
          <StyledIconContainer isDropdownShow={isDropdownShow}>
            <StatMinusIcon fill={colors.dropdownIconFill} />
          </StyledIconContainer>
        )}
      </StyledDropdownLabelText>
      <StyledDropdownToggle
        isDropdownShow={isDropdownShow}
        onClick={handleSelect}
        {...{size}}
        {...{listSize}}
      >
        <StyledDropdownListContainer>
          {list &&
            list.map(item => (
              <StyledDropdownListItem
                key={item.title}
                id={item.id}
                data-selected={item.title}
              >
                {item.icon && item.icon}
                {item.title}
              </StyledDropdownListItem>
            ))}
        </StyledDropdownListContainer>
      </StyledDropdownToggle>
    </StyledDropdownContainer>
  );
};

export default Dropdown;
