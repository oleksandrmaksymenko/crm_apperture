import {useState} from 'react';
import {
  StyledTable,
  StyledTableCell,
  StyledTableHead,
} from './Table.styled.tsx';
import Checkbox from '../Checkbox';
import TableRow from './TableRow.tsx';

export type TableContainerProps = {
  tableConfig: {
    head: {
      title: string;
      sortBy?: string;
      onClick?: (arg?: unknown) => unknown;
    }[];
    bodyProps: {[key: string]: string};
    body: {[key: string]: string}[];
  }[];
};

const TableContainer = ({tableConfig}: TableContainerProps) => {
  const [isSelectedAll, setIsSelectedAll] = useState(false);

  const selectAll = () => {
    setIsSelectedAll(!isSelectedAll);
  };

  const handleSort = (sortBy: string) => {
    console.log(sortBy);
  };

  return (
    <div>
      {tableConfig.map(item => (
        <StyledTable>
          <StyledTableHead length={item.head.length}>
            <Checkbox id='head' onChange={selectAll} />
            {item.head.map(headItem => (
              <StyledTableCell
                onClick={() => headItem.sortBy && handleSort(headItem.sortBy)}
              >
                {headItem.title}
              </StyledTableCell>
            ))}
          </StyledTableHead>
          {item.body.map((bodyItem, i) => (
            <TableRow
              bodyItem={bodyItem}
              item={item}
              i={i}
              isSelectedAll={isSelectedAll}
              length={item.head.length}
            />
          ))}
        </StyledTable>
      ))}
    </div>
  );
};

export default TableContainer;
