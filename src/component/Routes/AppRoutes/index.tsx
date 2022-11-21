import User from "containers/user";
import { appRoutesEnum, AuthRuotesEnum } from "enums/routes";
import AppLayout from "layout/AppLayout";
import { Route, Routes } from "react-router-dom";
import Test from "../../../containers/test";

export default function AppRoutes() {
  return (
    <Routes>
      {/* <Route path="/test" element={<Test />} /> */}
      <Route
        path={appRoutesEnum.user}
        element={<AppLayout RenderComponent={User} path={appRoutesEnum.user} />}
      />
      <Route
        path={AuthRuotesEnum.Login}
        element={
          <AppLayout RenderComponent={User} path={AuthRuotesEnum.Login} />
        }
      />
      <Route
        path={appRoutesEnum.test2}
        element={
          <AppLayout RenderComponent={Test} path={appRoutesEnum.test2} />
        }
      />
      <Route
        path={appRoutesEnum.test3}
        element={
          <AppLayout RenderComponent={Test} path={appRoutesEnum.test3} />
        }
      />
    </Routes>
  );
}
