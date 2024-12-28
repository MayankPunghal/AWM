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
  Username: string;
  UserEmail: string;
  Password: string;
  FirstName: string;
  LastName: string;
  DisplayName: string;
  ContactNo : number;
}) => {
  const axiosInstance = getAxiosInstance('user-management-api');
  const response = await axiosInstance.post(`/registeruser`, user);
  return response.data;
};

export const getUsers = async (page: number, size: number) => {
  const axiosInstance = getAxiosInstance('user-management-api')
  const response = await axiosInstance.get(`/getusers?page=${page}&size=${size}`);
  return response.data;
};

export const getUsersWithSearch = async (page: number, size: number, search?: string) => {
  // console.log(`/users_with_search?page=${page}&size=${size}${search ? `&search=${search}` : ''}`);
  const axiosInstance = getAxiosInstance('user-management-api');
  const response = await axiosInstance.get(`/users_with_search?page=${page}&size=${size}${search ? `&q=${search}` : ''}`);
  return response.data;
};

// Login user (JWT authentication)
export const loginUser = async (Username: string, Password: string) => {
  const axiosInstance = getAxiosInstance('user-management-api')
  const response = await axiosInstance.post(`/loginbyusername`, { Username, Password });
  console.log("response", response);
  return response.data.token;
};

export const checkApiHealth = async () => {
  const axiosInstance = getAxiosInstance('general-api')
  const response = await axiosInstance.get(`/checkhealth`)
  return response.data.status;
}