import { AuthActionTypesEnum } from "enums/login";
import { AuthActionTypes, AuthState } from "types/login";

export const initialLoginState: AuthState = {
  status: false,
  loading: false,
  user: {
    name: "",
    role: "",
  },
};

export const loginReducer = (
  state = initialLoginState,
  action: AuthActionTypes
) => {
  switch (action.type) {
    case AuthActionTypesEnum.AuthSucces:
      return {
        // eslint-disable-next-line
        ...state,
        ...action.payload,
      };
    case AuthActionTypesEnum.UpdateAuthState:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
