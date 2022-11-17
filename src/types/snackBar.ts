import { SnackbarOrigin } from "@material-ui/core";
import { SnackBarActionTypeEnum } from "../enums/snackBar";

export interface SnackBarType {
  message: string;
  messageType: "success" | "error" | "info" | "warning" | undefined;
  anchorOrigin?: SnackbarOrigin;
}

export interface SnackBarReducerState extends SnackBarType {
  show: boolean;
}

export interface UpdateSnackBarAction {
  type: typeof SnackBarActionTypeEnum.Update;
  payload: SnackBarType;
}

export interface ResetSnackBarAction {
  type: typeof SnackBarActionTypeEnum.Reset;
  payload: null;
}

export type SnackBarActionTypes = UpdateSnackBarAction | ResetSnackBarAction;
