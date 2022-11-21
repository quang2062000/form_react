import { apiRoutesEnum } from "enums/routes";
import { LoginParams, LoginResponse } from "types/login";
import AXIOS from "./axios";

function login(body: LoginParams): Promise<LoginResponse> {
  return AXIOS.post(apiRoutesEnum.Login, body);
}

const loginService = {
  login,
};

export default loginService;
