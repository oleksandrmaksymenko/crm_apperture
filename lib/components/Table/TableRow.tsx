import {useState, useEffect} from 'react';
import {StyledTableCell, StyledTableRow} from './Table.styled.tsx';
import Checkbox from '../Checkbox';
import Button from '../Button';
import {MoreVerticalIcon} from '../../assets/icons';
import {useTheme} from '@emotion/react';

type TableRowProps = {
  item: any;
  bodyItem: {[key: string]: string};
  i: number;
  isSelectedAll: boolean;
  length: number;
};

const TableRow = ({
  bodyItem,
  item,
  i,
  isSelectedAll,
  length,
}: TableRowProps) => {
  const {colors} = useTheme() as {colors: {tableRowIconFillColor: string}};
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    setActive(isSelectedAll);
  }, [isSelectedAll]);

  const handleChange = () => {
    setActive(!isActive);
  };

  return (
    <StyledTableRow key={bodyItem.title} isSelected={isActive} length={length}>
      <Checkbox onChange={handleChange} id={`row-${i}`} isChecked={isActive} />
      {Object.values(item.bodyProps).map((prop: any) => (
        <StyledTableCell>{bodyItem[prop]}</StyledTableCell>
      ))}
      <Button
        size='medium'
        variant='text'
        iconPosition='left'
        isFullSize={false}
        icon={<MoreVerticalIcon fill={colors.tableRowIconFillColor} />}
      />
    </StyledTableRow>
  );
};

export default TableRow;
