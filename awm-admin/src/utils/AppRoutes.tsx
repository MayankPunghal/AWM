// src/components/AppRoutes.tsx

import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import UserListPage from "../pages/UserListPage";
import PrivateRoute from "../utils/PrivateRoute";
import NotFound from "../pages/NotFound";
import WorkOrdersList from "../pages/WorkOrders/WorkOrdersList";
import CreateWorkOrders from "../pages/WorkOrders/CreateWorkOrders";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/users" element={<PrivateRoute element={<UserListPage />} />} />
      <Route path="/workorderslist" element={<PrivateRoute element={<WorkOrdersList />} />} />
      <Route path="/createworkorders" element={<PrivateRoute element={<CreateWorkOrders />} />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
