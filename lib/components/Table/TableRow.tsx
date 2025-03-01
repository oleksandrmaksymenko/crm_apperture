import {useState, useEffect, useRef} from 'react';
import {
  StyledActionsContainer,
  StyledTableCell,
  StyledTableRow,
} from './Table.styled.tsx';
import Checkbox from '../Checkbox';
import Button from '../Button';
import {MoreVerticalIcon} from '../../assets/icons';
import {useTheme} from '@emotion/react';
import {uuid} from '../../functions/uuid';
import {BodyItemProps, TableContainerType} from './TableContainer.tsx';
import useClickOutside from '../../hooks/useClickOutside.ts';

type TableRowProps = {
  item: TableContainerType['tableConfig'];
  bodyItem: BodyItemProps;
  i: number;
  isSelectedAll: boolean;
  length: number;
  withCheckbox?: boolean;
  withActions?: boolean;
  Menu?: () => React.JSX.Element;
};

const TableRow = ({
  i,
  item,
  Menu,
  length,
  bodyItem,
  withActions,
  withCheckbox,
  isSelectedAll,
}: TableRowProps) => {
  const {colors} = useTheme() as {colors: {tableRowIconFillColor: string}};
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
    setIsMenuOpen(!isMenuOpen);
  };

  useClickOutside(actionsContainerRef, () => {
    isMenuOpen ? setIsMenuOpen(false) : () => null;
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
          id={`row-${i}`}
          isChecked={isActive}
        />
      )}
      {Object.values(item.bodyProps).map((prop: keyof BodyItemProps) => (
        <StyledTableCell key={uuid()}>{bodyItem[prop]}</StyledTableCell>
      ))}
      {Menu && withActions && (
        <StyledActionsContainer ref={actionsContainerRef}>
          <Button
            size='medium'
            variant='text'
            iconPosition='left'
            isFullSize={false}
            onClick={handleClickOnActions}
            icon={<MoreVerticalIcon fill={colors.tableRowIconFillColor} />}
          />
          {isMenuOpen && <Menu />}
        </StyledActionsContainer>
      )}
    </StyledTableRow>
  );
};

export default TableRow;
