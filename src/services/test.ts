import { apiRoutesEnum } from "../enums/routes";
import AXIOS from "./axios";

function test(payload: any) {
  return AXIOS.post(apiRoutesEnum.test, payload);
}

const serviceApi = {
  test,
};

export default serviceApi;
