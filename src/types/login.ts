import { AuthActionTypesEnum } from "enums/login";

export interface LoginParams {
  email: string;
  password: string;
}

export interface LoginResponse {
  data: {
    accessToken: string;
    name: string;
    role: string;
    status: string;
  };
}

export interface AuthState {
  status: boolean;
  loading: boolean;
  user: {
    name: string;
    role: string;
  };
}

export interface AuthSuccessAction {
  type: AuthActionTypesEnum.AuthSucces;
  payload: AuthState;
}

export interface UpdateAuthStateAction {
  type: AuthActionTypesEnum.UpdateAuthState;
  payload: Partial<AuthState>;
}

export type AuthActionTypes = AuthSuccessAction | UpdateAuthStateAction;
