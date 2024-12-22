import React from "react";

interface UserDropdownProps {
  email: string;
  lastLogin: string;
  onLogout: () => void;
}

const UserDropdown: React.FC<UserDropdownProps> = ({ email, lastLogin, onLogout }) => {
  return (
    <div className="absolute right-0 mt-2 w-48 bg-white text-black border border-gray-300 rounded-md shadow-lg">
      <div className="p-4">
        <div className="font-semibold">Email: {email}</div>
        <div className="text-sm text-gray-600">Last Login: {lastLogin}</div>
      </div>
      <div className="border-t border-gray-200">
        <button
          onClick={onLogout}
          className="w-full text-left p-2 text-red-600 hover:bg-gray-200 rounded-b-md"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserDropdown;
