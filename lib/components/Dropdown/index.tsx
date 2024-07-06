import {useState} from 'react';
import Divider from '../Divider/index.tsx';
import {
  StyledDropdownContainer,
  StyledDropdownLabelText,
  StyledDropdownListContainer,
  StyledDropdownListItem,
  StyledDropdownTitle,
  StyledDropdownToggle,
  StyledDropdownToggleTitleContainer,
  StyledIconContainer,
} from './Dropdown.styled.tsx';
import {StatMinusIcon} from '../../assets/icons';
import {useTheme} from '@emotion/react';
import {ThemeProps} from '../../themes';

export type DropdownProps = {
  label: string;
  onSelect: (arg: string) => void;
  list: {
    title: string;
    icon?: React.ReactNode;
  }[];
} & Partial<{
  title: string;
  size: 'full' | 'content';
  listSize: 'sm' | 'md' | 'lg';
  withoutIcon: boolean;
  disabled: boolean;
  isChooseSelect: boolean;
}>;

const Dropdown = ({
  title,
  label,
  withoutIcon,
  list,
  onSelect,
  isChooseSelect,
  listSize = 'md',
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
    if (value) {
      onSelect(value);
      if (isChooseSelect) setLabelText(value);
      setIsDropdownShow(false);
    }
  };

  return (
    <StyledDropdownContainer {...rest}>
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
        {...{listSize}}
      >
        {title && (
          <StyledDropdownToggleTitleContainer>
            <StyledDropdownTitle>title</StyledDropdownTitle>
            <Divider />
          </StyledDropdownToggleTitleContainer>
        )}
        <StyledDropdownListContainer>
          {list &&
            list.map(item => (
              <StyledDropdownListItem
                key={item.title}
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
