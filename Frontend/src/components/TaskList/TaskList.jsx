import React, { useState } from "react";
import { useAuth } from "../../context/AuthProvider";

const TaskList = () => {
  const [swipedIndex, setSwipedIndex] = useState(null);
  const { loggedInUser } = useAuth();
  const handleSwipe = (index) => {
    setSwipedIndex(swipedIndex === index ? null : index);
  };

  // Utility to display status
  const renderStatus = (status) => {
    if (status.completed) {
      return <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs">✅ Completed</span>;
    }
    if (status.failed) {
      return <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs">❌ Failed</span>;
    }
    if (status.active) {
      return <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs">🔄 Active</span>;
    }
    if (status.newTask) {
      return <span className="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-xs">🆕 New Task</span>;
    }
    return null;
  };

  return (
    <div className="w-full max-w-[95rem] mx-auto mt-6 overflow-x-auto" id="task">
      <div className="flex gap-10 min-w-max px-6 pb-6">
        {loggedInUser.tasks.map((task, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-3xl min-w-[420px] max-w-md"
          >
            {/* Background Action (Delete) */}
            <div className="absolute inset-0 flex items-center justify-end bg-red-500 text-white pr-6 rounded-3xl">
              🗑️ Delete
            </div>

            {/* Foreground Task Card */}
            <div
              className={`rounded-3xl shadow-2xl p-8 h-72 flex flex-col justify-between transition-transform duration-300 cursor-pointer bg-gradient-to-br from-white to-gray-100 hover:scale-105 ${
                swipedIndex === index ? "-translate-x-32" : "translate-x-0"
              }`}
              onClick={() => handleSwipe(index)}
            >
              {/* Category + Date */}
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold px-4 py-1 rounded-full bg-indigo-100 text-indigo-600">
                  {task.category}
                </span>
                <span className="text-sm text-gray-500">{task.date}</span>
              </div>

              {/* Title + Description */}
              <div>
                <h1 className="text-2xl font-bold text-gray-800">{task.title}</h1>
                <p className="text-gray-600 mt-3 text-base leading-relaxed">
                  {task.description}
                </p>
              </div>

              {/* Status */}
              <div className="mt-3">{renderStatus(task.status)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
