import React, { useState, useEffect } from 'react';
import { checkApiHealth } from '../services/userService';
import { ToastContainer } from 'react-toastify';
import { useLocation } from 'react-router-dom';

const HealthCheck = ({ children }:any) => {
  const [isApiHealthy, setIsApiHealthy] = useState<Boolean | null>(null);
  const location = useLocation(); 

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const response = await checkApiHealth();
          setIsApiHealthy(response === 'ok');
        }
        catch (error) {
        console.error('Error checking health:', error);
        setIsApiHealthy(false);
      }
    };

    checkHealth();
  }, [location]);

  if (isApiHealthy === null) {
    return <div className="text-center text-lg font-semibold">Loading...</div>;
  }

  if (isApiHealthy) {
    return (
        <>
        <ToastContainer />
        {children}
        </>
    );
  }
  else{
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-red-100 text-red-800 border border-red-300 rounded p-6">
          <h1 className="text-4xl font-bold mb-4">503 Service Unavailable</h1>
          <p className="text-lg">Uh oh! Something went wrong. Our service is currently unavailable. Please try again later.</p>
        </div>
      );
  }
};

export default HealthCheck;
