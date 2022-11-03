import { Checkbox, Typography } from "@material-ui/core";
import React, { useCallback, useMemo } from "react";
import { SortEnum } from "../../enums/sort";
import { ColumnData, Data, rows } from "../../enums/test";
import DataTable from "../common/DataTable";
import { HeadCell } from "../common/DataTable/types";

export interface TestProps {
  sort: SortEnum;
  sortBy: keyof Data;
  selected: number[];
  page: number;
  rowsPerPage: number;
  handleClickRow: (value: any) => void;
  isSelected: (value: number) => boolean;
  handleSelectAllClick: () => void;
  handleRequestSort: (value: string, sortBy: string) => void;
  handleClick: (value: number, check: boolean) => void;
  handleChangePage: (event: unknown, newPage: number) => void;
  handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Test(props: TestProps) {
  const {
    sort,
    sortBy,
    selected,
    page,
    rowsPerPage,
    isSelected,
    handleSelectAllClick,
    handleRequestSort,
    handleClick,
    handleChangePage,
    handleChangeRowsPerPage,
    handleClickRow,
  } = props;

  const handleSelect = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, value: any) => {
      e.stopPropagation();
      handleClick(value.id, !selected.includes(value.id));
    },
    [handleClick, selected]
  );

  const headerCell: Array<HeadCell<Data> & { label: string }> = useMemo(
    () => [
      {
        label: "",
        customHeaderRender: () => (
          <Checkbox
            indeterminate={
              isSelected.length > 0 && isSelected.length < selected.length
            }
            checked={
              selected.length > 0 && isSelected.length === selected.length
            }
            onChange={handleSelectAllClick}
            inputProps={{ "aria-label": "select all desserts" }}
          />
        ),
        customBodyRender: (value) => (
          <Checkbox
            checked={isSelected(value.id)}
            onClick={(e) => handleSelect(e, value)}
            inputProps={{ "aria-label": "indeterminate checkbox" }}
          />
        ),
      },
      {
        label: "Id",
        sortBy: ColumnData.Id,
        sort: true,
        customBodyRender: (value) => <Typography>{value.id}</Typography>,
      },
      {
        label: "Name",
        sortBy: ColumnData.Name,
        sort: true,
        customBodyRender: (value) => <Typography>{value.name}</Typography>,
      },
      {
        label: "Calories",
        sortBy: ColumnData.Calories,
        sort: true,
        customBodyRender: (value) => <Typography>{value.calories}</Typography>,
      },
      {
        label: "Fat",
        sortBy: ColumnData.Fat,
        sort: true,
        customBodyRender: (value) => <Typography>{value.fat}</Typography>,
      },
      {
        label: "Carbs",
        sortBy: ColumnData.Carbs,
        sort: true,
        customBodyRender: (value) => <Typography>{value.carbs}</Typography>,
      },
      {
        label: "Protein",
        sortBy: ColumnData.Protein,
        sort: true,
        customBodyRender: (value) => <Typography>{value.protein}</Typography>,
      },
    ],
    [handleSelectAllClick, isSelected, selected, handleSelect]
  );

  const optionsTable = useMemo(() => {
    return {
      isClickRow: true,
      handleClickRow,
    };
  }, [handleClickRow]);

  return (
    <DataTable
      data={rows}
      headerCell={headerCell}
      sortDefault={sort}
      sortByDefault={sortBy}
      page={page}
      rowsPerPage={rowsPerPage}
      options={optionsTable}
      handleRequestSort={handleRequestSort}
      handleChangePage={handleChangePage}
      handleChangeRowsPerPage={handleChangeRowsPerPage}
    />
  );
}
