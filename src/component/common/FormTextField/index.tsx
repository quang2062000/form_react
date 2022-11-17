import React, { useMemo } from "react";
import {
  IconButton,
  InputAdornment,
  TextField,
  TextFieldProps,
} from "@material-ui/core";

export type FormTextFieldProps = TextFieldProps & {
  endAdornmentIcon?: JSX.Element | string;
  endAdornmentIconButton?: JSX.Element | string;
  onEndAdornmentButtonClick?: () => void;
  classNameIcon?: string;
};

export default function FormTextField(props: FormTextFieldProps) {
  const {
    endAdornmentIcon,
    onEndAdornmentButtonClick,
    endAdornmentIconButton,
    classNameIcon,
    InputProps,
    ...rest
  } = props;
  const endAdornment = useMemo(() => {
    if (endAdornmentIcon) {
      return (
        <InputAdornment position="end">
          {typeof endAdornmentIcon === "string" ? (
            <img
              className={classNameIcon}
              src={endAdornmentIcon}
              alt="endAdornmentIcon"
            />
          ) : (
            endAdornmentIcon
          )}
        </InputAdornment>
      );
    }
    if (endAdornmentIconButton) {
      return (
        <InputAdornment position="end">
          <IconButton
            data-testid="endAdornment-button"
            size="small"
            onClick={onEndAdornmentButtonClick}
          >
            {typeof endAdornmentIconButton === "string" ? (
              <img
                className={classNameIcon}
                src={endAdornmentIconButton}
                alt="endAdornment-button"
              />
            ) : (
              endAdornmentIconButton
            )}
          </IconButton>
        </InputAdornment>
      );
    }
    return undefined;
  }, [
    endAdornmentIcon,
    onEndAdornmentButtonClick,
    classNameIcon,
    endAdornmentIconButton,
  ]);
  return (
    <TextField
      variant="outlined"
      fullWidth
      type="password"
      InputProps={{
        endAdornment,
        ...InputProps,
      }}
      {...rest}
    />
  );
}
