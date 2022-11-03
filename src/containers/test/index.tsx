import { isEmpty } from "lodash";
import React, { useCallback } from "react";
import TestComponent from "../../component/test";
import { SortEnum } from "../../enums/sort";
import { ColumnData, rows } from "../../enums/test";

export default function Test() {
  const [selected, setSelected] = React.useState<number[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleSelectAllClick = useCallback(() => {
    if (isEmpty(selected) || selected.length < rows.length) {
      const newSelecteds = rows.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    } else {
      setSelected([]);
    }
  }, [selected]);

  const handleClick = useCallback(
    (value: number, check: boolean) => {
      if (check) setSelected((prev) => [...prev, value]);
      else setSelected((prev) => prev.filter((id) => id !== value));
    },
    [setSelected]
  );

  const handleRequestSort = (value: string, sortBy: string) => {
    console.log("da vao controller:", value, sortBy);
  };

  const handleChangePage = useCallback((event: unknown, newPage: number) => {
    setPage(newPage);
  }, []);

  const handleChangeRowsPerPage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    },
    []
  );

  const isSelected = useCallback(
    (value: number) => {
      return selected.indexOf(value) !== -1;
    },
    [selected]
  );

  const handleClickRow = useCallback((value: any) => {
    console.log("handle click roeeeewwwww", value);
  }, []);

  return (
    <TestComponent
      sort={SortEnum.Asc}
      sortBy={ColumnData.Id}
      selected={selected}
      page={page}
      rowsPerPage={rowsPerPage}
      isSelected={isSelected}
      handleSelectAllClick={handleSelectAllClick}
      handleRequestSort={handleRequestSort}
      handleClick={handleClick}
      handleChangePage={handleChangePage}
      handleChangeRowsPerPage={handleChangeRowsPerPage}
      handleClickRow={handleClickRow}
    />
  );
}
