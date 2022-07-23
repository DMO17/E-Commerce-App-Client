import { Routes, Route } from "react-router-dom";
import { Pay } from "./components/Pay";
import { Success } from "./components/Success";
import { Home } from "./pages/Home";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/pay" element={<Pay />} />;
      <Route path="/success" element={<Success />} />;
      <Route path="/" element={<Home />} />;
    </Routes>
  );
};
