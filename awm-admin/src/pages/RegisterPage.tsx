import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/userService";

const RegisterPage: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [first_name, setFirstName] = useState<string>("");
  const [last_name, setLastName] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await registerUser({ username, email, password, first_name, last_name, gender });
      navigate("/login");
    } catch (error: any) {
      alert("Registration failed: " + error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="p-6 bg-white rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <input
          type="text"
          placeholder="First Name"
          value={first_name}
          onChange={(e) => setFirstName(e.target.value)}
          className="p-2 border border-gray-300 rounded mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Last Name"
          value={last_name}
          onChange={(e) => setLastName(e.target.value)}
          className="p-2 border border-gray-300 rounded mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="p-2 border border-gray-300 rounded mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border border-gray-300 rounded mb-2 w-full"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border border-gray-300 rounded mb-2 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
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
