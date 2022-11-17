import { Button, InputLabel } from "@material-ui/core";
import { isEmpty } from "lodash";
import React, { useCallback, useMemo, useState } from "react";
import FormSelect from "../../component/common/FormSelect";
import FormTextField from "../../component/common/FormTextField";
import TestComponent from "../../component/test";
import { SortEnum } from "../../enums/sort";
import {
  ColumnData,
  ListCvTagStatusEnum,
  rows,
  statusOptions,
} from "../../enums/test";
import { useStyle } from "./styles";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import FormSecureTextField from "../../component/common/FormSecureTextField";
import ConfirmRemove from "../../component/common/Dialog/ConfirmRemove";

export default function Test() {
  const classes = useStyle();
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

  const tagItem: ListCvTagStatusEnum[] = [
    ListCvTagStatusEnum.Apply,
    ListCvTagStatusEnum.ApplyOffer,
  ];
  const handleFilterChange = useCallback((value: any) => {}, []);

  const statusMapping = useMemo(() => {
    const mapping: any = {};
    statusOptions.forEach((item) => {
      mapping[item.value] = item.label;
    });
    return mapping;
  }, []);

  const statusRenderValue = useCallback(
    (values: any) => {
      return (
        values?.map((val: any) => statusMapping[val])?.join(", ") || (
          <InputLabel>Status CV</InputLabel>
        )
      );
    },
    [statusMapping]
  );

  const onEndAdornmentButtonClick = useCallback(() => {
    console.log("alooooooooooooooo");
  }, []);

  const [open, setOpen] = useState<boolean>(false);

  const openDialog = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  const onCancel = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirm = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <>
      <FormSelect
        native={false}
        displayEmpty={true}
        value={tagItem}
        multiple
        onChange={handleFilterChange}
        options={statusOptions}
        renderValue={statusRenderValue}
      />
      <FormSelect
        className={classes.root}
        native={false}
        displayEmpty={true}
        value={tagItem}
        multiple
        onChange={handleFilterChange}
        options={statusOptions}
        renderValue={statusRenderValue}
      />
      <div style={{ width: "400px" }}>
        <FormTextField
          placeholder="Search by name......"
          // classNameIcon={classes.icon}
          // endAdornmentIcon="data:image/png;base64,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"
          endAdornmentIconButton={
            <SupervisorAccountIcon style={{ fontSize: 40 }} />
          }
          onEndAdornmentButtonClick={onEndAdornmentButtonClick}
        />
      </div>

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
      <div style={{ width: "300px" }}>
        <FormSecureTextField placeholder="password" />
      </div>
      <Button onClick={openDialog} variant="contained">
        Confirm
      </Button>
      <div>
        <ConfirmRemove
          message="Bạn có muốn thực hiện tiếp không?"
          cancelButtonLabel="CANCEL"
          confirmButtonLabel="DELETE"
          open={open}
          title="Xác thực"
          onCancel={onCancel}
          onConfirm={onConfirm}
        />
      </div>
    </>
  );
}
