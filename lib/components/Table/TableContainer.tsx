import {useState} from 'react';
import {
  StyledTable,
  StyledTableCell,
  StyledTableHead,
} from './Table.styled.tsx';
import Checkbox from '../Checkbox';
import {uuid} from '../../functions/uuid.ts';
import TableRow from './TableRow.tsx';

export type BodyItemProps = {
  title: string;
  name: string;
  companyName: string;
  Menu?: any;
};

export type TableContainerType = {
  tableConfig: {
    head: {
      title: string;
      sortBy?: string;
      onClick?: (arg?: unknown) => unknown;
    }[];
    bodyProps: BodyItemProps;
    body: BodyItemProps[];
    withCheckbox?: boolean;
    withActions?: boolean;
  };
};

export type TableContainerTypeProps = Record<
  'tableConfig',
  TableContainerType['tableConfig'][]
>;

const TableContainer = ({tableConfig}: TableContainerTypeProps) => {
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
        <StyledTable key={uuid()}>
          <StyledTableHead
            length={item.head.length}
            withCheckbox={item.withCheckbox}
            withActions={item.withActions}
          >
            {item.withCheckbox && <Checkbox id='head' onChange={selectAll} />}
            {item.head.map(headItem => (
              <StyledTableCell
                key={uuid()}
                onClick={() => headItem.sortBy && handleSort(headItem.sortBy)}
              >
                {headItem.title}
              </StyledTableCell>
            ))}
          </StyledTableHead>
          {item.body.map((bodyItem, i) => (
            <TableRow
              key={uuid()}
              bodyItem={bodyItem}
              item={item}
              i={i}
              isSelectedAll={isSelectedAll}
              length={item.head.length}
              withCheckbox={item.withCheckbox}
              withActions={item.withActions}
              Menu={bodyItem.Menu}
            />
          ))}
        </StyledTable>
      ))}
    </div>
  );
};

export default TableContainer;
