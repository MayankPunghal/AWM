import React from "react";

interface WithEnterSubmitProps {
  onSubmit: () => void;
  children: React.ReactNode;
}

const WithEnterSubmit: React.FC<WithEnterSubmitProps> = ({ onSubmit, children }) => {
  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent default form submission
      onSubmit();
    }
  };

  return (
    <div tabIndex={0} onKeyDown={handleKeyPress}>
      {children}
    </div>
  );
};

export default WithEnterSubmit;
