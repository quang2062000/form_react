import React, { useCallback } from "react";
import { TableBody, TableCell, TableRow } from "@material-ui/core";
import { rows } from "../../../../enums/test";
import { BodyTableProps } from "../types";

export default function BodyTable(props: BodyTableProps) {
  const { page, rowsPerPage, headCells, options } = props;
  const { handleClickRow, isClickRow } = options;

  const onClickRow = useCallback(
    (value: any) => {
      if (handleClickRow) handleClickRow(value);
    },
    [handleClickRow]
  );

  const content = useCallback(
    (value: any) => {
      return headCells.map((cell) => {
        return (
          <>
            <TableCell>
              {cell?.customBodyRender && cell.customBodyRender(value)}
            </TableCell>
          </>
        );
      });
    },
    [headCells]
  );

  return (
    <TableBody>
      {rows
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row) => {
          return (
            <TableRow
              hover
              role="checkbox"
              tabIndex={-1}
              key={row.id}
              onClick={() => isClickRow && onClickRow(row)}
            >
              {content(row)}
            </TableRow>
          );
        })}
    </TableBody>
  );
}
