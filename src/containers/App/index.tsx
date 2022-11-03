import React, { useMemo } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "../../component/Routes/AppRoutes";

export default function App() {
  const render = useMemo(() => {
    return <AppRoutes />;
  }, []);
  return (
    <div>
      <BrowserRouter>{render}</BrowserRouter>
    </div>
  );
}
