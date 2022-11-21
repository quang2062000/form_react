import LoginComponent from "component/login";
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "store/actions/loginAction";
import { loginReducer } from "store/selector";
import { LoginParams } from "types/login";

export default function Login() {
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const dispatch = useDispatch();
  const status = useSelector(loginReducer);
  console.log(status, "statuass");

  const handleLogin = useCallback(
    (form: LoginParams) => {
      setIsSubmit(true);
      dispatch<any>(loginAction(form));
    },
    [dispatch]
  );

  return (
    <>
      <LoginComponent
        handleForm={handleLogin}
        pressSubmit={isSubmit}
        loading={status.loading}
      />
    </>
  );
}
