import React from "react";
import Login from "containers/login";
import { AuthRuotesEnum } from "enums/routes";
import AuthLayout from "layout/AuthLayout";
import { Navigate, Route, Routes } from "react-router-dom";

export default function AuthRoutes() {
  return (
    <Routes>
      <Route
        path={AuthRuotesEnum.Login}
        element={
          <AuthLayout RenderComponent={Login} path={AuthRuotesEnum.Login} />
        }
      />
      <Route
        path="*"
        element={<Navigate to={AuthRuotesEnum.Login} replace />}
      />
    </Routes>
  );
}
