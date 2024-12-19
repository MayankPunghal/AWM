import React, { useState } from "react";
import Button from "../components/Button";
import { loginUser } from "../services/userService";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const token = await loginUser(username, password);
      localStorage.setItem("authToken", token);
      navigate("/users");
    } catch (error: any) {
      alert("Login failed: " + error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border border-gray-300 rounded mb-2 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border border-gray-300 rounded mb-4 w-full"
        />
        <Button onClick={handleLogin}>Login</Button>
      </div>
    </div>
  );
};

export default LoginPage;
