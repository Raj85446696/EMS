import React, { useState } from "react";

const TaskList = () => {
  const [swipedIndex, setSwipedIndex] = useState(null);

  const tasks = [
    {
      id: 1,
      priority: "🔥 High",
      date: "18 Aug",
      title: "Ek Aur Task",
      desc: "Task to karna parega mere bhai 😅",
      color: "bg-red-100 text-red-600",
    },
    {
      id: 2,
      priority: "⚡ Medium",
      date: "19 Aug",
      title: "React Project",
      desc: "Complete the frontend design",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      id: 3,
      priority: "✅ Low",
      date: "20 Aug",
      title: "Grocery Shopping",
      desc: "Buy fruits and vegetables",
      color: "bg-green-100 text-green-600",
    },
    {
      id: 4,
      priority: "✅ Low",
      date: "20 Aug",
      title: "Grocery Shopping",
      desc: "Buy fruits and vegetables",
      color: "bg-green-100 text-green-600",
    },
    {
      id: 5,
      priority: "✅ Low",
      date: "20 Aug",
      title: "Grocery Shopping",
      desc: "Buy fruits and vegetables",
      color: "bg-green-100 text-green-600",
    },
    {
      id: 6,
      priority: "✅ Low",
      date: "20 Aug",
      title: "Grocery Shopping",
      desc: "Buy fruits and vegetables",
      color: "bg-green-100 text-green-600",
    },
  ];

  const handleSwipe = (index) => {
    setSwipedIndex(swipedIndex === index ? null : index);
  };

  return (
    <div
      className="w-full max-w-[95rem] mx-auto mt-6 overflow-x-auto"
      id="task"
    >
      <div className="flex gap-10 min-w-max px-6 pb-6">
        {tasks.map((task, index) => (
          <div
            key={task.id}
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
              {/* Priority + Date */}
              <div className="flex justify-between items-center">
                <span
                  className={`text-sm font-semibold px-4 py-1 rounded-full ${task.color}`}
                >
                  {task.priority}
                </span>
                <span className="text-sm text-gray-500">{task.date}</span>
              </div>

              {/* Title + Description */}
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  {task.title}
                </h1>
                <p className="text-gray-600 mt-3 text-base leading-relaxed">
                  {task.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
