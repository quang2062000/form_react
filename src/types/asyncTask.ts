import { AsyncTaskTypeEnum } from "../enums/asyncActions";
import { ApiError } from "./api";

export type TaskStatus<E = ApiError> = {
  processing: boolean;
  error?: E;
};

export type AsyncTaskStatus = {
  // Dynamic key will be generate
  [key: string]: TaskStatus<ApiError> | undefined;
};

export type AsyncTaskReducerState = {
  status: AsyncTaskStatus;
};

export interface AsyncTaskStartAction {
  type: typeof AsyncTaskTypeEnum.AsyncTaskStart;
  payload: string;
}

export interface AsyncTaskStopAction {
  type: typeof AsyncTaskTypeEnum.AsyncTaskStop;
  payload: { key: string; error?: ApiError };
}

export interface AsyncTaskResetAction {
  type: typeof AsyncTaskTypeEnum.AsyncTaskReset;
  payload: string;
}
export type AsyncTaskActionTypes =
  | AsyncTaskStartAction
  | AsyncTaskStopAction
  | AsyncTaskResetAction;
