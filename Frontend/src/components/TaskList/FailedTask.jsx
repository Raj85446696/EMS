import React from "react";
import {useAuth} from '../../context/AuthProvider';
function FailedTask() {
    const {loggedInUser} = useAuth(); 
  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-red-100 text-red-700 px-8 py-6 rounded-2xl shadow-lg min-w-[200px] transition-transform duration-300 hover:scale-105">
      <h1 className="text-4xl font-extrabold">
        {loggedInUser.tasksCount.failed}
      </h1>
      <p className="text-lg mt-2">❌ Failed</p>
    </div>
  );
}

export default FailedTask;
