import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { snackBarReducer, initialSnackBarState } from "./reducers/snackBar";
import {
  asyncTaskReducer,
  initialAsyncTaskState,
} from "./reducers/asyncTaskReducer";
import { dialogReducer, initialDialogState } from "./reducers/dialogReducer";
import { RootStateType } from "../types/store";

export const initialRootState: RootStateType = {
  snackBarReducer: initialSnackBarState,
  asyncTaskReducer: initialAsyncTaskState,
  dialogReducer: initialDialogState,
};

export default function configureStore(
  preloadedState: RootStateType = initialRootState
) {
  const middlewares = [thunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer];
  const composedEnhancers =
    process.env.NODE_ENV === "development"
      ? composeWithDevTools(...enhancers)
      : compose(...enhancers);
  const appReducer = combineReducers<RootStateType>({
    snackBarReducer,
    asyncTaskReducer,
    dialogReducer,
  });

  return createStore(appReducer, preloadedState, composedEnhancers as any);
}
