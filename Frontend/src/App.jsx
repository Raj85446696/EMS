import React, { useContext, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import AuthContexts from './context/AuthContext';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if (email === "admin@gmail.com" && password === "123") {
      setUser("admin");
    } else if (email === "employee@gmail.com" && password === "123") {
      setUser("employee");
    } else {
      alert("Invalid credentials");
    }
  };

  const data = useContext(AuthContexts);
  console.log(data);
  

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === "admin" && <AdminDashboard />}
      {user === "employee" && <EmployeeDashboard />}
    </>
  );
};

export default App;
