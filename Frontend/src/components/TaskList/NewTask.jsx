import React from "react";
import { useAuth } from "../../context/AuthProvider";
function NewTask() {
  const { loggedInUser } = useAuth();
  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-blue-100 text-blue-700 px-8 py-6 rounded-2xl shadow-lg min-w-[200px] transition-transform duration-300 hover:scale-105">
      <h1 className="text-4xl font-extrabold">
        {loggedInUser.tasksCount.newTasks}
      </h1>
      <p className="text-lg mt-2">🆕 New Task</p>
    </div>
  );
}

export default NewTask;
