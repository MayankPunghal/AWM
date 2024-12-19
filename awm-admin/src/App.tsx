import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./utils/authContext";  // Import AuthProvider
import ProtectedRoute from "./utils/protectedRoute";  // Import ProtectedRoute
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UserListPage from "./pages/UserListPage";

const App: React.FC = () => {
  return (
    <AuthProvider> {/* Provide auth context */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Protected route, only accessible if user is logged in */}
          <Route
            path="/users"
            element={
              <ProtectedRoute> {/* Protect UserListPage */}
                <UserListPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
