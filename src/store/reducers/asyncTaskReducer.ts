import { AsyncTaskTypeEnum } from "../../enums/asyncActions";
import {
  AsyncTaskActionTypes,
  AsyncTaskReducerState,
} from "../../types/asyncTask";

export const initialAsyncTaskState: AsyncTaskReducerState = {
  status: {},
};

export const asyncTaskReducer = (
  state = initialAsyncTaskState,
  action: AsyncTaskActionTypes
) => {
  switch (action.type) {
    case AsyncTaskTypeEnum.AsyncTaskStart: {
      return {
        ...state,
        status: {
          ...state.status,
          [action.payload]: {
            processing: true,
          },
        },
      };
    }
    case AsyncTaskTypeEnum.AsyncTaskStop: {
      return {
        ...state,
        status: {
          ...state.status,
          [action.payload.key]: {
            processing: false,
            error: action.payload.error,
          },
        },
      };
    }
    case AsyncTaskTypeEnum.AsyncTaskReset: {
      return {
        ...state,
        status: {
          ...state.status,
          [action.payload]: {
            processing: false,
          },
        },
      };
    }
    default:
      return state;
  }
};
