import { AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AsyncTaskReducerState } from "./asyncTask";
import { DialogState } from "./dialog";
import { SnackBarReducerState } from "./snackBar";

export type DispatchType = ThunkDispatch<any, any, AnyAction>;

export type RootStateType = {
  snackBarReducer: SnackBarReducerState;
  asyncTaskReducer: AsyncTaskReducerState;
  dialogReducer: DialogState;
};

export type ThunkActionType = ThunkAction<
  Promise<void>,
  RootStateType,
  Record<string, unknown>,
  AnyAction
>;
