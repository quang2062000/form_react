import React, { useCallback } from "react";
import { SortEnum } from "../../../enums/sort";
import { useStyles } from "./styles";
import BodyTable from "./TableBody";
import TableHeader from "./TableHeader";
import PaginationTable from "./TablePagination";
import { HeadCell, OptionsTable } from "./types";

export interface DataTableProps {
  data: any;
  headerCell: Array<HeadCell>;
  sortDefault: SortEnum;
  sortByDefault: string;
  page: number;
  rowsPerPage: number;
  options: OptionsTable;
  handleRequestSort?: (value: string, sortBy: string) => void;
  handleChangePage: (event: unknown, newPage: number) => void;
  handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
  renderFormFilter?: () => React.ReactNode;
}

function DataTable(props: DataTableProps) {
  const {
    headerCell,
    page,
    rowsPerPage,
    data,
    sortDefault,
    sortByDefault,
    options,
    handleRequestSort,
    handleChangePage,
    handleChangeRowsPerPage,
  } = props;
  const classes = useStyles();
  const [sort, setSort] = React.useState<SortEnum>(sortDefault);
  const [sortBy, setSortBy] = React.useState<string>(sortByDefault);

  const onRequestSort = useCallback(
    (value: string) => {
      const isAsc = sortBy === value && sort === SortEnum.Asc;
      const newDir = isAsc ? SortEnum.Desc : SortEnum.Asc;
      setSort(newDir);
      setSortBy(value);
      if (handleRequestSort) {
        handleRequestSort(value, newDir);
      }
    },
    [sort, sortBy, handleRequestSort]
  );

  return (
    <div className={classes.root}>
      <TableHeader
        sort={sort}
        headCells={headerCell}
        sortBy={sortBy}
        onRequestSort={onRequestSort}
      />
      <BodyTable
        headCells={headerCell}
        data={data}
        page={page}
        rowsPerPage={rowsPerPage}
        options={options}
      />
      <PaginationTable
        data={data}
        page={page}
        rowsPerPage={rowsPerPage}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  );
}

export default DataTable;
