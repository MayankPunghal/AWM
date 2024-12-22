import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "./AuthUtil";  // Import the useAuth hook

interface PrivateRouteProps {
  element: ReactNode;  // The type for a React component element
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const { getToken, checkTokenValidity } = useAuth();
  checkTokenValidity();
  const token = getToken();
  if (token) {
    return <>{element}</>;
  } else {
    console.log("Session timed out! Login again");
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
