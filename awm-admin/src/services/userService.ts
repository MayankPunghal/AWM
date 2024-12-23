import axios from "axios";
import { getAxiosInstance } from '../api/AxiosInstanceFactory';

// const apiUrl = process.env.REACT_APP_API_URL;
// const getAxiosInstance = () => {
//   const axioInstance =  axios.create({
//   baseURL: apiUrl,
//   headers: {
//     'Authorization' : `Bearer ${localStorage.getItem('token')}`,
//   }
// });
// return axioInstance;
// };

// Register user
export const registerUser = async (user: {
  username: string;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  gender: string;
}) => {
  const axiosInstance = getAxiosInstance('user-management-api');
  const response = await axiosInstance.post(`/users/`, user);
  return response.data;
};

export const getUsers = async (page: number, size: number) => {
  const axiosInstance = getAxiosInstance('user-management-api')
  const response = await axiosInstance.get(`/users?page=${page}&size=${size}`);
  return response.data;
};


// Login user (JWT authentication)
export const loginUser = async (username: string, password: string) => {
  const axiosInstance = getAxiosInstance('user-management-api')
  const response = await axiosInstance.post(`/login/`, { username, password });
  return response.data.access_token;
};

export const checkApiHealth = async () => {
  const axiosInstance = getAxiosInstance('user-management-api')
  const response = await axiosInstance.get(`/healthcheck`)
  return response.data.status;
}