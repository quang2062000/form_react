import { SnackBarActionTypeEnum } from "../../enums/snackBar";
import { ApiError } from "../../types/api";
import { SnackBarType } from "../../types/snackBar";

export function updateSnackBarAction(payload: SnackBarType, error?: ApiError) {
  // Return API response error message if exists
  if (error && error.data && error.data.message) {
    return {
      type: SnackBarActionTypeEnum.Update,
      payload: {
        message: error.data.message,
        messageType: "error",
      },
    };
  }
  return {
    type: SnackBarActionTypeEnum.Update,
    payload,
  };
}

export function resetSnackBarAction() {
  return {
    type: SnackBarActionTypeEnum.Reset,
  };
}
