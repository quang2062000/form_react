import React, { useCallback, useMemo } from "react";
import {
  Checkbox,
  FormControl,
  ListItemText,
  MenuItem,
  Radio,
  Select,
  SelectProps,
} from "@material-ui/core";
import { includes, isEqual } from "lodash";
import { useStyles } from "./styles";

export interface Options {
  label: string;
  value: any;
}

export interface FormSelectProps extends SelectProps {
  className?: string;
  inputLabel?: React.ReactNode;
  options: Array<Options>;
  onClickItem?: (record: Options) => void;
}

export default function FormSelect(props: FormSelectProps) {
  const classes = useStyles();
  const {
    value,
    options,
    inputLabel,
    className,
    onClickItem,
    multiple,
    MenuProps,
    ...rest
  } = props;

  const isChecked = useCallback(
    (itemValue: any) => {
      return multiple
        ? includes(value as Array<any>, itemValue)
        : isEqual(itemValue, value);
    },
    [multiple, value]
  );

  const handleClickItem = useCallback(
    (record: Options) => {
      return () => {
        if (onClickItem) {
          onClickItem(record);
        }
      };
    },
    [onClickItem]
  );

  const optionsRender = useMemo(() => {
    return options.map((item) => {
      return (
        <MenuItem
          className={classes.menuItem}
          key={item.label}
          value={item.value}
          onClick={handleClickItem(item)}
        >
          {multiple ? (
            <Checkbox checked={isChecked(item.value)} />
          ) : (
            <Radio checked={isChecked(item.value)} />
          )}
          <ListItemText primary={item.label} />
        </MenuItem>
      );
    });
  }, [handleClickItem, isChecked, multiple, options, classes]);

  return (
    <FormControl className={className ? className : classes.root}>
      {inputLabel}
      <Select
        value={value}
        multiple={multiple}
        variant="outlined"
        MenuProps={{
          PaperProps: {
            style: {
              backgroundColor: "#fff",
              height: "300px",
              width: "250px",
            },
          },
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "left",
          },
          getContentAnchorEl: null,
          ...MenuProps,
        }}
        {...rest}
      >
        {optionsRender}
      </Select>
    </FormControl>
  );
}
