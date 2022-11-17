import { AxiosRequestConfig } from "axios";

export interface ApiErrorData {
  message: string;
}

export interface ApiError {
  config?: AxiosRequestConfig;
  data?: ApiErrorData;
  status?: number;
  statusText?: string;
}
