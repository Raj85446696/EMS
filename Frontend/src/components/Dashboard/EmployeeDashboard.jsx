import React from "react";
import Navbar from "./Navbar";
import TaskNumber from "./TaskNumber";
import TaskList from "../TaskList/TaskList";
const EmployeeDashboard = ({ data }) => {
  return (
    <>
      <Navbar />
      <TaskNumber />
      <TaskList />
    </>
  );
};

export default EmployeeDashboard;
