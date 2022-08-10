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
  const [productsInCart, setProductInCart] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [type, setType] = useState("All Products");

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/products");

      if (data?.products) {
        setAllProducts(data?.products);
        setProducts(data?.products?.sort(() => Math.random() - 0.5));
      }
    };

    fetchProducts();
  }, []);

  const filterProducts = (type, price) => {
    if (type) {
      setProducts(allProducts.filter((product) => product.type === type));
      setType(type);
    }
    if (type === null || type === "All Products") {
      setProducts(allProducts);
      setType("All Products");
    }

    if (price === "asc") {
      setProducts(products.sort((a, b) => a.price - b.price));
    }

    if (price === "desc") {
      setProducts(products.sort((a, b) => b.price - a.price));
    }
  };

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
        productsInCart,
        setProductInCart,
        filterProducts,
        type,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AppContext);
};
