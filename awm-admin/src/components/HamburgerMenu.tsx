import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaPen, FaTrash, FaTimes } from "react-icons/fa"; // Import necessary icons

interface HamburgerMenuProps {
  userId: string | number;
  onEdit: (userId: string | number) => void;
  onDelete: (userId: string | number) => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ userId, onEdit, onDelete }) => {
  const [showMenu, setShowMenu] = useState(false); // Track if the menu is open or closed
  const menuRef = useRef<HTMLDivElement | null>(null); // Reference to the menu div

  // Toggle the menu visibility when the hamburger icon is clicked
  const handleMenuClick = () => {
    setShowMenu((prev) => !prev); // Toggle menu visibility
  };

  // Close the menu when X is clicked
  const handleCloseMenu = () => {
    setShowMenu(false); // Close the menu
  };

  // Close the menu when clicking outside the menu area
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false); // Close the menu when clicking outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex items-center">
      {/* If the menu is not open, show the hamburger icon */}
      {!showMenu ? (
        <FaBars
          onClick={handleMenuClick}
          className="cursor-pointer text-xl text-gray-600 hover:text-gray-800"
        />
      ) : (
        // Show the icons in a horizontal tray
        <div ref={menuRef} className="flex space-x-2 items-center">
          <FaPen
            onClick={() => onEdit(userId)}
            className="cursor-pointer text-xl text-gray-600 hover:text-gray-800"
          />
          <FaTrash
            onClick={() => onDelete(userId)}
            className="cursor-pointer text-xl text-gray-600 hover:text-gray-800"
          />
          <FaTimes
            onClick={handleCloseMenu}
            className="cursor-pointer text-xl text-gray-600 hover:text-gray-800"
          />
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
