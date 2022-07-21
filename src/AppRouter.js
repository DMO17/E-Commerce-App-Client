import { Routes, Route } from "react-router-dom";
import { Pay } from "./components/Pay";
import { Success } from "./components/Success";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/pay" element={<Pay />} />;
      <Route path="/success" element={<Success />} />;
    </Routes>
  );
};
