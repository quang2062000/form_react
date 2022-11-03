import React, { useCallback, useMemo } from "react";
import {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@material-ui/core";
import { SortEnum } from "../../../../enums/sort";
import { HeadCell } from "../types";
import { useStyles } from "./styles";

interface TableHeaderProps {
  sort: SortEnum;
  sortBy: string;
  headCells: Array<HeadCell>;
  onRequestSort: (property: any) => void;
}

export default function TableHeader(props: TableHeaderProps) {
  const classes = useStyles();
  const { sort, sortBy, onRequestSort, headCells } = props;

  const sortDirection =
    sort === SortEnum.Asc ? "asc" : sort === SortEnum.Desc ? "desc" : undefined;

  const createSortHandler = useCallback(
    (property: any) => () => {
      onRequestSort(property);
    },
    [onRequestSort]
  );

  const contentHeader = useMemo(() => {
    return headCells.map((headCell) => {
      return (
        <>
          <TableCell>
            {headCell?.customHeaderRender && headCell.customHeaderRender()}
            <TableSortLabel
              active={sortBy === headCell.sortBy}
              direction={sortBy === headCell.sortBy ? sortDirection : "asc"}
              onClick={
                headCell.sort ? createSortHandler(headCell.sortBy) : undefined
              }
            >
              {headCell.label}
              {sortBy === headCell.label ? (
                <span className={classes.visuallyHidden}>
                  {sort === SortEnum.Desc
                    ? "sorted descending"
                    : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        </>
      );
    });
  }, [headCells, classes, createSortHandler, sort, sortBy, sortDirection]);
  return (
    <TableHead>
      <TableRow>{contentHeader}</TableRow>
    </TableHead>
  );
}
