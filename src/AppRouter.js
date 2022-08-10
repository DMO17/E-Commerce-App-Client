import { Routes, Route, Navigate } from "react-router-dom";
import { LoginForm } from "./components/LoginForm";
import { Pay } from "./components/Pay";
import { Success } from "./components/Success";
import { useAuth } from "./context/AppProvider";
import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { ProductList } from "./pages/ProductList";
import { SignUp } from "./pages/SignUp";

export const AppRouter = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Routes>
      {isLoggedIn && (
        <>
          <Route path="/pay" element={<Pay />} />;
          <Route path="/success" element={<Success />} />;
          <Route path="/cart" element={<Cart />} />;
          <Route path="/products/:productId" element={<Product />} />;
          <Route path="/products" element={<ProductList />} />;
          <Route path="/" element={<Home />} />;
          <Route path="*" element={<Navigate to="/" />} />
        </>
      )}
      {!isLoggedIn && (
        <>
          <Route path="/login" element={<LoginForm />} />;
          <Route path="/register" element={<SignUp />} />;
          <Route path="/products/:productId" element={<Product />} />;
          <Route path="/products" element={<ProductList />} />;
          <Route path="/" element={<Home />} />;
          <Route path="*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  );
};
