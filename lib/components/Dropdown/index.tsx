import {useEffect, useRef, useState} from 'react';
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
import useClickOutside from '../../hooks/useClickOutside.ts';

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
  withIcon: boolean;
  disabled: boolean;
  isChooseSelect: boolean;
}>;

const Dropdown = ({
  label,
  withIcon,
  list,
  onSelect,
  isChooseSelect,
  listSize = 'md',
  size,
  disabled,
  ...rest
}: DropdownProps) => {
  const [labelText, setLabelText] = useState(label);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isDropdownShow, setIsDropdownShow] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const {colors} = useTheme();

  useEffect(() => {
    setLabelText(label);
  }, [label]);

  useClickOutside(containerRef, () => {
    if (isDropdownShow) setIsDropdownShow(false);
  });

  const toggleDropdown = () => {
    if (disabled) return;
    setIsDropdownShow(show => !show);
  };

  const handleTriggerKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleDropdown();
    }
    if (e.key === 'Escape') setIsDropdownShow(false);
  };

  const handleSelect = (item: DropdownProps['list'][number]) => {
    onSelect({value: item.title, id: item.id});
    setSelectedId(item.id);
    if (isChooseSelect) setLabelText(item.title);
    setIsDropdownShow(false);
  };

  const handleItemKeyDown = (
    e: React.KeyboardEvent,
    item: DropdownProps['list'][number],
  ) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleSelect(item);
    }
    if (e.key === 'Escape') setIsDropdownShow(false);
  };

  return (
    <StyledDropdownContainer ref={containerRef} {...{size, disabled}} {...rest}>
      <StyledDropdownLabelText
        role='button'
        tabIndex={disabled ? -1 : 0}
        aria-haspopup='listbox'
        aria-expanded={isDropdownShow}
        onClick={toggleDropdown}
        onKeyDown={handleTriggerKeyDown}
        {...{listSize, size}}
      >
        {labelText}
        {withIcon && (
          <StyledIconContainer isDropdownShow={isDropdownShow}>
            <StatMinusIcon fill={colors.dropdownIconFill} />
          </StyledIconContainer>
        )}
      </StyledDropdownLabelText>
      <StyledDropdownToggle isDropdownShow={isDropdownShow} {...{size, listSize}}>
        <StyledDropdownListContainer role='listbox'>
          {list.map(item => (
            <StyledDropdownListItem
              key={item.id}
              role='option'
              tabIndex={isDropdownShow ? 0 : -1}
              aria-selected={item.id === selectedId}
              isSelected={item.id === selectedId}
              onClick={() => handleSelect(item)}
              onKeyDown={e => handleItemKeyDown(e, item)}
            >
              {item.icon}
              {item.title}
            </StyledDropdownListItem>
          ))}
        </StyledDropdownListContainer>
      </StyledDropdownToggle>
    </StyledDropdownContainer>
  );
};

export default Dropdown;
