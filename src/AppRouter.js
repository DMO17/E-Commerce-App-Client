import { Routes, Route } from "react-router-dom";
import { LoginForm } from "./components/LoginForm";
import { Pay } from "./components/Pay";
import { Success } from "./components/Success";
import { Home } from "./pages/Home";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/pay" element={<Pay />} />;
      <Route path="/success" element={<Success />} />;
      <Route path="/login" element={<LoginForm />} />;
      <Route path="/" element={<Home />} />;
    </Routes>
  );
};
