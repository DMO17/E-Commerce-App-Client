import axios from "axios";
import { createContext, useState, useContext, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const isToken = !!localStorage.getItem("token");
  const userInfo = JSON.parse(localStorage.getItem("user"));
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("token") || false
  );
  const [isLoggedIn, setIsLoggedIn] = useState(isToken || false);
  const [user, setUser] = useState(userInfo || undefined);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/products");
      data?.products && setProducts(data.products);
    };

    fetchProducts();
  }, []);

  return (
    <AppContext.Provider
      value={{
        accessToken,
        setAccessToken,
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
        products,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AppContext);
};
