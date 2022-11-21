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
import { loginReducer, initialLoginState } from "./reducers/loginReducer";

export const initialRootState: RootStateType = {
  snackBarReducer: initialSnackBarState,
  asyncTaskReducer: initialAsyncTaskState,
  dialogReducer: initialDialogState,
  loginReducer: initialLoginState,
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
    loginReducer,
  });

  return createStore(appReducer, preloadedState, composedEnhancers as any);
}
