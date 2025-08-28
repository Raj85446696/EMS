import React from "react";
import NewTask from "../TaskList/NewTask";
import CompleteTasks from "../TaskList/CompleteTasks";
import AcceptTasks from "../TaskList/AcceptTasks";
import FailedTask from "../TaskList/FailedTask";
const TaskNumber = () => {
  return (
    <div className="flex flex-wrap justify-between gap-10 w-full max-w-7xl mx-auto mt-10">
      {/* New Task */}
      <NewTask />

      {/* Completed */}
      <CompleteTasks/>

      {/* Accepted */}
      <AcceptTasks/>

      {/* Failed */}
      <FailedTask/>
    </div>
  );
};

export default TaskNumber;
