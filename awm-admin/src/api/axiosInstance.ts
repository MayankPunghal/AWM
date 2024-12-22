import axios from 'axios';
import useAuth from "../utils/AuthUtil";
// Replace with your backend URL
const apiUrl = process.env.REACT_APP_API_URL;

export const useAxios = () => {
  const { getToken } = useAuth();

  const token = getToken();
  const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    'Authorization' : `Bearer ${token}`,
  }
});

axiosInstance.interceptors.response.use(
  response => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      const { checkTokenValidity, redirectToLogin } = useAuth();
      checkTokenValidity();
      redirectToLogin();
    }
    return Promise.reject(error);
  }
);
return axiosInstance;
}
