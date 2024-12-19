import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to AWM Admin</h1>
      <p className="mb-4">Manage your users, register, and view user lists easily.</p>
      <div className="flex space-x-4">
        <Link to="/register">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Register
          </button>
        </Link>
        <Link to="/login">
          <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
