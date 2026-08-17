import {useState} from 'react';
import {
  StyledTable,
  StyledTableCell,
  StyledTableHead,
} from './Table.styled.tsx';
import Checkbox from '../Checkbox';
import TableRow from './TableRow.tsx';

export type BodyItemProps = {
  title: string;
  name: string;
  companyName: string;
  Menu?: (props: {close: () => void}) => React.JSX.Element;
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
  const [selectedAllByTable, setSelectedAllByTable] = useState<
    Record<number, boolean>
  >({});

  const handleSort = (_sortBy: string) => {
    // TODO: wire up sorting once the API supports it
  };

  return (
    <div>
      {tableConfig.map((item, tableIndex) => (
        <StyledTable key={tableIndex}>
          <StyledTableHead
            length={item.head.length}
            withCheckbox={item.withCheckbox}
            withActions={item.withActions}
          >
            {item.withCheckbox && (
              <Checkbox
                id={`head-${tableIndex}`}
                onChange={() =>
                  setSelectedAllByTable(state => ({
                    ...state,
                    [tableIndex]: !state[tableIndex],
                  }))
                }
              />
            )}
            {item.head.map(headItem => (
              <StyledTableCell
                key={headItem.title}
                onClick={() => headItem.sortBy && handleSort(headItem.sortBy)}
              >
                {headItem.title}
              </StyledTableCell>
            ))}
          </StyledTableHead>
          {item.body.map((bodyItem, i) => (
            <TableRow
              key={i}
              bodyItem={bodyItem}
              item={item}
              i={i}
              tableIndex={tableIndex}
              isSelectedAll={!!selectedAllByTable[tableIndex]}
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
