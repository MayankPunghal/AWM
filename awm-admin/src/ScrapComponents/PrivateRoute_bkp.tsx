import React, {ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  element: ReactNode; // The type for a React component element
}

// Helper function to retrieve and parse userData
const getUserData = (): { userId: number } | null => {
  const userDataStr = localStorage.getItem('userData');
  if (!userDataStr) return null;

  try {
    return JSON.parse(userDataStr);
  } catch (error) {
    console.error('Error parsing userData:', error);
    return null;
  }
};

// Helper function to get the token expiration time
const getTokenExpirationTime = (): Date | null => {
  const tokenExpirationTimeStr = localStorage.getItem('tokenExpirationTime');
  return tokenExpirationTimeStr ? new Date(tokenExpirationTimeStr) : null;
};

// Helper function to check if the token is valid
const isTokenValid = (tokenExpirationTime: Date | null): boolean => {
  if (!tokenExpirationTime) return false;
  const currentDate = new Date();
  return tokenExpirationTime > currentDate;
};

// Function to log useful information (optional)
const logInfo = (
  userData: { userId: number } | null,
  token: string | null,
  tokenExpirationTime: Date | null
): void => {
  console.log('User Data:', userData);
  console.log('Token:', token);
  console.log('Token Expiration Time:', tokenExpirationTime?.toString());
  console.log('Current Date:', new Date().toString());
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const userData = getUserData(); // Retrieve user data
  const token = localStorage.getItem('token'); // Get token from localStorage
  const tokenExpirationTime = getTokenExpirationTime(); // Get token expiration time

  logInfo(userData, token, tokenExpirationTime); // Optional logging

  // If userData exists, token is not null, and the token is valid, render the element
  // Otherwise, redirect to login
  if (userData && token && isTokenValid(tokenExpirationTime)) {
    return <>{element}</>;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
