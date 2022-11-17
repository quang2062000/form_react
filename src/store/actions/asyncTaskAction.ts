import { AsyncTaskTypeEnum } from "../../enums/asyncActions";
import { ApiError } from "../../types/api";
import {
  AsyncTaskStopAction,
  AsyncTaskStartAction,
  AsyncTaskResetAction,
} from "../../types/asyncTask";

export const asyncTaskStartAction = (key: string): AsyncTaskStartAction => ({
  type: AsyncTaskTypeEnum.AsyncTaskStart,
  payload: key,
});

export const asyncTaskStopAction = (
  key: string,
  error?: ApiError
): AsyncTaskStopAction => ({
  type: AsyncTaskTypeEnum.AsyncTaskStop,
  payload: { key, error },
});

export const ayncTaskResetAction = (key: string): AsyncTaskResetAction => ({
  type: AsyncTaskTypeEnum.AsyncTaskReset,
  payload: key,
});
