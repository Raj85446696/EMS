import React from "react";
import Navbar from "./Navbar";
const AdminDashboard = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen px-4">
        <form className="bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl p-8 w-full max-w-lg space-y-6 border border-gray-200">
          {/* Title */}
          <h1 className="text-3xl font-extrabold text-gray-900 text-center">
            ✨ Create New Task
          </h1>
          <p className="text-center text-gray-600 text-sm">
            Fill out the details below to assign a task.
          </p>

          {/* Task Title */}
          <div>
            <label className="block text-gray-800 font-semibold mb-2">
              Task Title
            </label>
            <input
              type="text"
              placeholder="Enter task title"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none shadow-sm"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-800 font-semibold mb-2">
              Description
            </label>
            <textarea
              placeholder="Enter task description"
              rows="4"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none shadow-sm"
            ></textarea>
          </div>

          {/* Date + Assign To (side by side on bigger screens) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-800 font-semibold mb-2">
                Date
              </label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none shadow-sm"
              />
            </div>

            <div>
              <label className="block text-gray-800 font-semibold mb-2">
                Assign To
              </label>
              <input
                type="text"
                placeholder="Enter assignee name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none shadow-sm"
              />
            </div>
          </div>

          {/* Priority */}
          <div>
            <label className="block text-gray-800 font-semibold mb-2">
              Priority
            </label>
            <select className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none shadow-sm">
              <option value="high">🔥 High</option>
              <option value="medium">⚡ Medium</option>
              <option value="low">✅ Low</option>
            </select>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-600 text-white font-semibold py-3 rounded-xl shadow-lg transform transition duration-300 hover:scale-105"
          >
            🚀 Create Task
          </button>
        </form>
      </div>
    </>
  );
};

export default AdminDashboard;
