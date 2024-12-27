import React from "react";

const Spinner: React.FC = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50 pointer-events-none">
      <div className="w-24 h-24 border-8 border-dotted border-blue-500 rounded-full animate-loader-spin"></div>
    </div>
  );
};

export default Spinner;
