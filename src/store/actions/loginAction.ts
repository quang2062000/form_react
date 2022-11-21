import { LoginError, LogoutError } from "constants/snackbarAction";
import { SecureStorageEnum } from "enums/auth/auth";
import { AuthActionTypesEnum } from "enums/login";
import loginService from "services/login";
import {
  AuthState,
  AuthSuccessAction,
  LoginParams,
  UpdateAuthStateAction,
} from "types/login";
import { DispatchType } from "types/store";
import secureStorage from "utils/secureStorage";
import { updateSnackBarAction } from "./snackBarAction";

export const loginSuccessAction = (payload: AuthState): AuthSuccessAction => ({
  type: AuthActionTypesEnum.AuthSucces,
  payload,
});

export const updateLoginStateAction = (
  payload: Partial<AuthState>
): UpdateAuthStateAction => ({
  type: AuthActionTypesEnum.UpdateAuthState,
  payload,
});

export const loginAction = (body: LoginParams) => {
  return async (dispatch: DispatchType) => {
    dispatch(updateLoginStateAction({ loading: true }));
    try {
      const res = await loginService.login(body);
      const { accessToken, role, name } = res.data;
      secureStorage.setItem(SecureStorageEnum.AccessToken, accessToken);
      secureStorage.setItem(SecureStorageEnum.Name, name);
      secureStorage.setItem(SecureStorageEnum.Role, role);
      dispatch(
        loginSuccessAction({
          loading: false,
          status: true,
          user: {
            name: name,
            role: role,
          },
        })
      );
      dispatch(updateLoginStateAction({ loading: false, status: false }));
    } catch (error) {
      dispatch(updateSnackBarAction(LoginError));
      dispatch(updateLoginStateAction({ loading: false, status: false }));
    }
  };
};

export const logoutAction = (callback: () => void) => {
  return async (dispatch: DispatchType) => {
    dispatch(updateLoginStateAction({ loading: true }));
    try {
      secureStorage.removeItem(SecureStorageEnum.Name);
      secureStorage.removeItem(SecureStorageEnum.AccessToken);
      secureStorage.removeItem(SecureStorageEnum.Role);
      dispatch(updateLoginStateAction({ loading: false }));
      callback();
    } catch (error) {
      dispatch(updateSnackBarAction(LogoutError));
      dispatch(updateLoginStateAction({ loading: false, status: false }));
    }
  };
};
