// Header.tsx
import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white py-4 px-6 flex items-center justify-between shadow-md">
      <div className="text-2xl font-bold">
        <Link to="/">AWM</Link>
      </div>
    </header>
  );
};

export default Header;