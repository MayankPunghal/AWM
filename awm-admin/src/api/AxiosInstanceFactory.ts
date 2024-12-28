import axios from "axios";

// Define service base URLs
const SERVICE_BASE_URLS: { [key: string]: string } = {
  'user-management-api': process.env.REACT_APP_USER_MANAGEMENT_API_URL || '',
  'general-api': process.env.REACT_APP_GENERAL_API_URL || '',
  'workorder-management-api': process.env.REACT_APP_WORKORDER_MANAGEMENT_API_URL || '',
  
};

export const getAxiosInstance = (serviceName: string) => {
  const baseURL = SERVICE_BASE_URLS[serviceName];

  if (!baseURL) {
    throw new Error(`Service ${serviceName} is not defined in SERVICE_BASE_URLS.`);
  }

  const axiosInstance = axios.create({
    baseURL,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`, // Add token from localStorage
    },
  });

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        // Handle 401 errors (e.g., redirect to login or refresh token)
        console.error("Unauthorized: Redirecting to login...");
        // Add your login redirect logic here
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};
