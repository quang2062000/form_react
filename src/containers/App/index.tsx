import AuthRoutes from "component/Routes/AuthRoutes";
import { SecureStorageEnum } from "enums/auth/auth";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { loginReducer } from "store/selector";
import secureStorage from "utils/secureStorage";
import AppRoutes from "../../component/Routes/AppRoutes";

export default function App() {
  const token = secureStorage.getItem(SecureStorageEnum.AccessToken);
  const authenStore = useSelector(loginReducer);
  console.log(authenStore, "authenStore");
  console.log(token, "token");
  const isAuthen = authenStore.status || token;

  const render = useMemo(() => {
    if (!isAuthen) return <AuthRoutes />;
    return <AppRoutes />;
  }, [isAuthen]);
  return (
    <div>
      <BrowserRouter>{render}</BrowserRouter>
    </div>
  );
}
