import { SnackBarType } from "types/snackBar";

export const LoginError: SnackBarType = {
  message: "Authorization Error. Invalid Username/ Password.",
  messageType: "error",
};

export const LogoutError: SnackBarType = {
  message: "Logout error",
  messageType: "error",
};
