import { appRoutesEnum } from "enums/routes";
import AppLayout from "layout/AppLayout";
import { Route, Routes } from "react-router-dom";
import Test from "../../../containers/test";

export default function AppRoutes() {
  return (
    <Routes>
      {/* <Route path="/test" element={<Test />} /> */}
      <Route
        path={appRoutesEnum.test}
        element={<AppLayout RenderComponent={Test} path={appRoutesEnum.test} />}
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
