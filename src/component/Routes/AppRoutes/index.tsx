import { Route, Routes } from "react-router-dom";
import Test from "../../../containers/test";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/test" element={<Test />} />
    </Routes>
  );
}
