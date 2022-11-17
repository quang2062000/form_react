import { RootStateType as IStore } from "../types/store";

// SnackBarReducer
export const getSnackBar = (store: IStore) => store.snackBarReducer;

// AppReducer
export const sTaskStatus = (key: string) => (store: IStore) =>
  store.asyncTaskReducer.status[key];

// Dialog reducer
export const getDialog = (store: IStore) => store.dialogReducer;
