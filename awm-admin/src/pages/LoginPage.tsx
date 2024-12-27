import React, { useState } from "react";
import Button from "../components/Button";
import { loginUser } from "../services/userService";
import { useNavigate } from "react-router-dom";
import { showToast } from "../utils/ToastUtil";
import { jwtDecode } from "../utils/JwtDecode";

const LoginPage: React.FC = () => {
  const [Username, setUsername] = useState<string>("");
  const [Password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const token = await loginUser(Username, Password);
      showToast("Welcome Back", true, 2000, false);
      localStorage.setItem("token", token);
      const decodedToken: any = jwtDecode(token);
      localStorage.setItem("userDetails", JSON.stringify(decodedToken));

      const userDetails = JSON.parse(localStorage.getItem("userDetails") || "{}");
      console.log(userDetails);

      navigate("/users");
    } catch (error: any) {
      showToast("Login failed: " + error.message, false, 2000, false);
      // alert("Login failed: " + error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={Username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border border-gray-300 rounded mb-2 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border border-gray-300 rounded mb-4 w-full"
        />
        <Button onClick={handleLogin}>Login</Button>
      </div>
    </div>
  );
};

export default LoginPage;
