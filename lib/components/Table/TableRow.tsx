import {useState, useEffect, useRef} from 'react';
import {useTheme} from '@emotion/react';
import {
  StyledActionsContainer,
  StyledTableCell,
  StyledTableRow,
} from './Table.styled.tsx';
import Checkbox from '../Checkbox';
import Button from '../Button';
import {MoreVerticalIcon} from '../../assets/icons';
import {BodyItemProps, TableContainerType} from './TableContainer.tsx';
import useClickOutside from '../../hooks/useClickOutside.ts';

type TableRowProps = {
  item: TableContainerType['tableConfig'];
  bodyItem: BodyItemProps;
  i: number;
  tableIndex: number;
  isSelectedAll: boolean;
  length: number;
  withCheckbox?: boolean;
  withActions?: boolean;
  Menu?: (props: {close: () => void}) => React.JSX.Element;
};

const TableRow = ({
  i,
  item,
  Menu,
  length,
  tableIndex,
  bodyItem,
  withActions,
  withCheckbox,
  isSelectedAll,
}: TableRowProps) => {
  const {colors} = useTheme();
  const actionsContainerRef = useRef<HTMLDivElement>(null);
  const [isActive, setActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setActive(isSelectedAll);
  }, [isSelectedAll]);

  const handleChange = () => {
    setActive(!isActive);
  };

  const handleClickOnActions = () => {
    setIsMenuOpen(open => !open);
  };

  useClickOutside(actionsContainerRef, () => {
    if (isMenuOpen) setIsMenuOpen(false);
  });

  return (
    <StyledTableRow
      key={bodyItem.title}
      isSelected={isActive}
      length={length}
      withCheckbox={withCheckbox}
      withActions={withActions}
    >
      {withCheckbox && (
        <Checkbox
          onChange={handleChange}
          id={`row-${tableIndex}-${i}`}
          isChecked={isActive}
        />
      )}
      {Object.keys(item.bodyProps).map((prop, propIndex) => (
        <StyledTableCell key={prop} data-label={item.head[propIndex]?.title}>
          {bodyItem[prop as Exclude<keyof BodyItemProps, 'Menu'>]}
        </StyledTableCell>
      ))}
      {Menu && withActions && (
        <StyledActionsContainer ref={actionsContainerRef}>
          <Button
            size='medium'
            variant='text'
            iconPosition='left'
            isFullSize={false}
            onClick={handleClickOnActions}
            aria-label='Row actions'
            icon={<MoreVerticalIcon fill={colors.tableRowIconFillColor} />}
          />
          {isMenuOpen && <Menu close={() => setIsMenuOpen(false)} />}
        </StyledActionsContainer>
      )}
    </StyledTableRow>
  );
};

export default TableRow;
