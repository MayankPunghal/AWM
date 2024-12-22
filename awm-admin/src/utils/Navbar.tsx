import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  // State to control the "Work Orders" dropdown visibility
  const [isWorkOrdersOpen, setIsWorkOrdersOpen] = useState(false);
  const [isHomeOpen, setIsHomeOpen] = useState(false);


  // Toggle the "Work Orders" dropdown
  const toggleWorkOrdersDropdown = () => {
    setIsWorkOrdersOpen(!isWorkOrdersOpen);
  };
  const toggleHomeDropdown = () => {
    setIsHomeOpen(!isHomeOpen);
  };

  return (
    <div
      className={`fixed top-0 right-0 h-screen w-64 bg-gray-800 text-white flex flex-col transition-all duration-300`}
    >
      <nav className="flex-1 flex flex-col">
        <div>
          <button
            onClick={toggleHomeDropdown}
            className="font-bold w-full px-3 py-2 hover:bg-gray-700 text-center flex justify-between border-2 transition-all"
          >
            Home
          </button>
          {isHomeOpen && (
            <div className="">
              {/* Login Link */}
        <Link to="/login" className="px-4 py-2 bg-gray-600 hover:bg-gray-500 flex text-center">
          Login
        </Link>
        {/* Login Link */}
        <Link to="/register" className="px-4 py-2 bg-gray-600 hover:bg-gray-500 flex text-center">
          Register
        </Link>
            </div>
          )}
        </div>

        {/* Users Link */}
        <Link to="/users" className="font-bold px-3 py-2 hover:bg-gray-700 flex text-center border-2">
          Users
        </Link>
        <div>
          <button
            onClick={toggleWorkOrdersDropdown}
            className="font-bold w-full px-3 py-2 hover:bg-gray-700 text-center flex justify-between border-2"
          >
            Work Orders
          </button>

          {/* Work Orders Dropdown */}
          {isWorkOrdersOpen && (
            <div className="">
              <Link to="/workorderslist" className="block px-4 py-2 bg-gray-600 hover:bg-gray-500 border-2 border-transparent hover:border-white transition-all">
                Work Orders List
              </Link>
              <Link to="/createworkorders" className="block px-4 py-2 bg-gray-600 hover:bg-gray-500 border-2 border-transparent hover:border-white transition-all">
                Create Work Orders
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
