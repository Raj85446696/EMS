import React, { createContext, useEffect, useContext, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null); 

  useEffect(() => {
    const { employees, admin } = getLocalStorage();
    setUserData({ employees, admin });

    // restore logged in user
    const savedUser = localStorage.getItem("logInUser");
    if (savedUser) {
      setLoggedInUser(JSON.parse(savedUser));
    }
  }, []);

  // Save userData to localStorage whenever it changes
  useEffect(() => {
    if (userData !== null) {
      setLocalStorage(userData);
    }
  }, [userData]);

  const login = (email, password) => {
    const employee = userData?.employees?.find(
      (emp) => emp.email === email && emp.password === password
    );
    const admin = userData?.admin?.find(
      (ad) => ad.email === email && ad.password === password
    );

    if (employee) {
      setLoggedInUser({ role: "employee", ...employee }); // ✅ store employee + role
      localStorage.setItem("logInUser", JSON.stringify({ role: "employee", ...employee }));
      return "employee";
    } else if (admin) {
      setLoggedInUser({ role: "admin", ...admin }); // ✅ store admin + role
      localStorage.setItem("logInUser", JSON.stringify({ role: "admin", ...admin }));
      return "admin";
    } else {
      alert("Invalid credentials");
      return null;
    }
  };

  const logout = () => {
    setLoggedInUser(null);
    localStorage.removeItem("logInUser");
  };

  return (
    <AuthContext.Provider value={{ userData, loggedInUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export const useAuth = () => useContext(AuthContext);
