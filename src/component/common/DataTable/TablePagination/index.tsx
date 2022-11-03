import React from "react";
import { TablePagination } from "@material-ui/core";

export interface PaginationTableProps {
  data: any;
  rowsPerPage: number;
  page: number;
  handleChangePage: (event: unknown, newPage: number) => void;
  handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function PaginationTable(props: PaginationTableProps) {
  const { data, rowsPerPage, page, handleChangePage, handleChangeRowsPerPage } =
    props;
  return (
    <TablePagination
      rowsPerPageOptions={[5, 10, 25]}
      count={data.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}
