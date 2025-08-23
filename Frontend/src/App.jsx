import React, { useContext, useState, useEffect } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const { loggedInUser, login, logout } = useContext(AuthContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (loggedInUser) {
      setUser(loggedInUser.role);
    }
  }, [loggedInUser]);

  const handleLogin = (email, password) => {
    const role = login(email, password);
    if (role) setUser(role);
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === "admin" && <AdminDashboard logout={logout} />}
      {user === "employee" && <EmployeeDashboard logout={logout} />}
    </>
  );
};

export default App;
