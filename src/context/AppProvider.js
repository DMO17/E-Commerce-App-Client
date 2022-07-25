import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const isToken = !!localStorage.getItem("token");
  const userInfo = JSON.parse(localStorage.getItem("user"));

  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("token") || false
  );

  const [isLoggedIn, setIsLoggedIn] = useState(isToken || false);

  const [user, setUser] = useState(userInfo || undefined);

  return (
    <AppContext.Provider
      value={{
        accessToken,
        setAccessToken,
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AppContext);
};
