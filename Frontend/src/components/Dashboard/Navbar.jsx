import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 shadow-lg p-5">
      <h1 className="text-xl font-semibold flex items-center gap-2">
        👋 Hello, <span className="font-bold text-2xl">Ritu Raj Verma</span>
      </h1>
      <button className="flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-xl shadow-md hover:bg-gray-100 transition">
        🚪 Logout
      </button>
    </div>
  );
};

export default Navbar;
