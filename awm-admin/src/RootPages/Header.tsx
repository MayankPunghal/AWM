import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserDropdown from "../components/UserDropdown"; // Import the UserDropdown component

const Header: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user details from localStorage
    const userDetails = localStorage.getItem("userDetails");
    if (userDetails) {
      setUser(JSON.parse(userDetails));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userDetails");
    setUser(null); // Clear the user state
    navigate("/login"); // Redirect to login page after logout
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <header className="bg-gray-800 text-white py-4 px-6 flex items-center justify-between shadow-md relative">
      <div className="text-2xl font-bold">
        <Link to="/">AWM</Link>
      </div>

      {user && (
        <div className="flex items-center space-x-4">
          <span className="cursor-pointer" onClick={toggleDropdown}>
            {user.firstname} {/* Display user's first name */}
          </span>

          {/* Dropdown menu */}
          {dropdownVisible && (
            <UserDropdown
              email={user.sub} // user's email
              lastLogin={user.lastlogin} // user's last login time
              onLogout={handleLogout} // logout function
            />
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
