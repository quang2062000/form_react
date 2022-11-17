import { SnackBarActionTypeEnum } from "../../enums/snackBar";
import {
  SnackBarActionTypes,
  SnackBarReducerState,
} from "../../types/snackBar";

export const initialSnackBarState: SnackBarReducerState = {
  show: false,
  message: "",
  messageType: undefined,
};

export const snackBarReducer = (
  state = initialSnackBarState,
  action: SnackBarActionTypes
) => {
  const { type, payload } = action;
  switch (type) {
    case SnackBarActionTypeEnum.Update: {
      return {
        ...state,
        ...payload,
        show: true,
      };
    }
    case SnackBarActionTypeEnum.Reset:
      return {
        ...initialSnackBarState,
      };
    default:
      return state;
  }
};
