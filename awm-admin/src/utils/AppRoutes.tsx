import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import UserListPage from "../pages/Users/UserListPage";
import WorkOrdersList from "../pages/WorkOrders/WorkOrdersList";
import CreateWorkOrders from "../pages/WorkOrders/CreateWorkOrders";
import PrivateRoute from "../utils/PrivateRoute";
import NotFound from "../pages/NotFound";
import Layout from "../RootPages/Layout"; // Import Layout component
import EditUser from "../pages/Users/EditUsers";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Protected routes with Layout and PrivateRoute */}
      <Route
        path="/users"
        element={
          <PrivateRoute element={<Layout><UserListPage /></Layout>} />
        }
      />
      <Route
        path="/workorderslist"
        element={
          <PrivateRoute element={<Layout><WorkOrdersList /></Layout>} />
        }
      />
      <Route
        path="/createworkorders"
        element={
          <PrivateRoute element={<Layout><CreateWorkOrders /></Layout>} />
        }
      />
      <Route path="/edit-user/:userId" 
      element={
      <PrivateRoute element={<Layout><EditUser /></Layout>} />
      }
      />

      {/* Catch-all for 404 */}
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
