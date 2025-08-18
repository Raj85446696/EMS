import React from "react";

const TaskNumber = () => {
  return (
    <div className="flex flex-wrap justify-between gap-10 w-full max-w-7xl mx-auto mt-10">
      {/* New Task */}
      <div className="flex-1 flex flex-col items-center justify-center bg-blue-100 text-blue-700 px-8 py-6 rounded-2xl shadow-lg min-w-[200px] transition-transform duration-300 hover:scale-105">
        <h1 className="text-4xl font-extrabold">0</h1>
        <p className="text-lg mt-2">🆕 New Task</p>
      </div>

      {/* Completed */}
      <div className="flex-1 flex flex-col items-center justify-center bg-green-100 text-green-700 px-8 py-6 rounded-2xl shadow-lg min-w-[200px] transition-transform duration-300 hover:scale-105">
        <h1 className="text-4xl font-extrabold">3</h1>
        <p className="text-lg mt-2">✅ Completed</p>
      </div>

      {/* Accepted */}
      <div className="flex-1 flex flex-col items-center justify-center bg-yellow-100 text-yellow-700 px-8 py-6 rounded-2xl shadow-lg min-w-[200px] transition-transform duration-300 hover:scale-105">
        <h1 className="text-4xl font-extrabold">0</h1>
        <p className="text-lg mt-2">📥 Accepted</p>
      </div>

      {/* Failed */}
      <div className="flex-1 flex flex-col items-center justify-center bg-red-100 text-red-700 px-8 py-6 rounded-2xl shadow-lg min-w-[200px] transition-transform duration-300 hover:scale-105">
        <h1 className="text-4xl font-extrabold">1</h1>
        <p className="text-lg mt-2">❌ Failed</p>
      </div>
    </div>
  );
};

export default TaskNumber;
