import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  // State to control whether the navbar is collapsed or not
  const [isCollapsed, setIsCollapsed] = useState(false);

  // State to control the "Work Orders" dropdown visibility
  const [isWorkOrdersOpen, setIsWorkOrdersOpen] = useState(false);
  const [isHomeOpen, setIsHomeOpen] = useState(false);

  // Toggle the collapsed state
  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Toggle the "Work Orders" dropdown
  const toggleWorkOrdersDropdown = () => {
    setIsWorkOrdersOpen(!isWorkOrdersOpen);
  };
  const toggleHomeDropdown = () => {
    setIsHomeOpen(!isHomeOpen);
  };

  return (
    <div
      className={`fixed top-0 right-0 h-screen bg-gray-800 text-white flex flex-col transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      <button
        onClick={toggleNavbar}
        className="text-white bg-gray-700 p-2 focus:outline-none z-10"
      >
        {isCollapsed ? "→" : "←"}
      </button>
      <nav className="flex-1 flex flex-col">
        <div>
          <button
            onClick={toggleHomeDropdown}
            className="font-bold w-full px-3 py-2 hover:bg-gray-700 text-center flex justify-between border-2 transition-all"
          >
            {isCollapsed ? "H" : "Home"}
          </button>
          {isHomeOpen && !isCollapsed && (
            <div className="">
              {/* Login Link */}
        <Link to="/login" className="px-4 py-2 bg-gray-600 hover:bg-gray-500 flex text-center">
          {isCollapsed ? "L" : "Login"}
        </Link>
        {/* Login Link */}
        <Link to="/register" className="px-4 py-2 bg-gray-600 hover:bg-gray-500 flex text-center">
          {isCollapsed ? "R" : "Register"}
        </Link>
            </div>
          )}
        </div>

        {/* Users Link */}
        <Link to="/users" className="font-bold px-3 py-2 hover:bg-gray-700 flex text-center border-2">
          {isCollapsed ? "U" : "Users"}
        </Link>
        <div>
          <button
            onClick={toggleWorkOrdersDropdown}
            className="font-bold w-full px-3 py-2 hover:bg-gray-700 text-center flex justify-between border-2"
          >
            {isCollapsed ? "W" : "Work Orders"}
          </button>

          {/* Work Orders Dropdown */}
          {isWorkOrdersOpen && !isCollapsed && (
            <div className="">
              <Link to="/workorderslist" className="block px-4 py-2 bg-gray-600 hover:bg-gray-500 border-2 border-transparent hover:border-white transition-all">
                {isCollapsed ? "W" : "Work Orders List"}
              </Link>
              <Link to="/createworkorders" className="block px-4 py-2 bg-gray-600 hover:bg-gray-500 border-2 border-transparent hover:border-white transition-all">
                {isCollapsed ? "C" : "Create Work Orders"}
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
