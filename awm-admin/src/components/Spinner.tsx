import React from "react";

// Spinner Component using Tailwind CSS with dotted effect
const Spinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center space-x-2">
      <div className="w-8 h-8 border-4 border-dotted border-blue-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
