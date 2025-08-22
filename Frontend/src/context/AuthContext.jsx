import React, { createContext, useEffect, useContext } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContexts = createContext();

const AuthProvider = ({ children }) => {
  useEffect(() => {
    setLocalStorage();
    getLocalStorage();
  }, []);

  return (
    <AuthContexts.Provider value={"sarthak"}>
      {children}
    </AuthContexts.Provider>
  );
};

export default AuthProvider;
