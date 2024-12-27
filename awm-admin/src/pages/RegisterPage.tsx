import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/userService";

const RegisterPage: React.FC = () => {
  const [Username, setUsername] = useState<string>("");
  const [UserEmail, setUserEmail] = useState<string>("");
  const [Password, setPassword] = useState<string>("");
  const [FirstName, setFirstName] = useState<string>("");
  const [MiddleName, setMiddleName] = useState<string>("");
  const [LastName, setLastName] = useState<string>("");
  const [DisplayName, setDisplayName] = useState<string>("");
  const [ContactNo, setContactNo] = useState<number>(0);
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const userDetails = { Username, UserEmail, Password, FirstName, LastName, DisplayName, ContactNo};
      await registerUser(userDetails);
      navigate("/login");
    } catch (error: any) {
      alert("Registration failed: " + error.message);
    }
  };

  const handleDisplayName = () => {
    if(MiddleName != "" && LastName == "")
    setDisplayName(FirstName + " "+ MiddleName);
    else if(MiddleName == "" && LastName != "")
      setDisplayName(FirstName + " "+ LastName);
    else if (MiddleName != "" && LastName != "")
      setDisplayName(FirstName + " "+ MiddleName + " "+ LastName);
    else
      setDisplayName(FirstName);
  }

  useEffect(() => {
    handleDisplayName();
    }, [FirstName, MiddleName, LastName]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-6 bg-white rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <input
          type="text"
          placeholder="First Name"
          value={FirstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="p-2 border border-gray-300 rounded mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Middle Name"
          value={MiddleName}
          onChange={(e) => setMiddleName(e.target.value)}
          className="p-2 border border-gray-300 rounded mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Last Name"
          value={LastName}
          onChange={(e) => setLastName(e.target.value)}
          className="p-2 border border-gray-300 rounded mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Display Name"
          value={DisplayName}
          className="p-2 border border-gray-300 rounded bg-gray-300 mb-2 w-full"
          readOnly
          disabled
        />
        <input
          type="text"
          placeholder="Username"
          value={Username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border border-gray-300 rounded mb-2 w-full"
        />
        <input
          type="UserEmail"
          placeholder="UserEmail"
          value={UserEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          className="p-2 border border-gray-300 rounded mb-2 w-full"
        />
        <input
          type="number"
          placeholder="Conact Number"
          value={ContactNo}
          onChange={(e) => setContactNo(e.target.valueAsNumber)}
          className="p-2 border border-gray-300 rounded mb-2 w-full"
        />
        <input
          type="Password"
          placeholder="Password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border border-gray-300 rounded mb-4 w-full"
        />
        <button
          onClick={handleRegister}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default RegisterPage;

