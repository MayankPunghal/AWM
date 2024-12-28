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

export const getUsers = async (page: number, size: number, searchQuery : string) => {
  const axiosInstance = getAxiosInstance('user-management-api')
  const response = await axiosInstance.get(`/getusers?page=${page}&size=${size}`+ (searchQuery && searchQuery.trim() !== "" ? `&searchText=${encodeURIComponent(searchQuery)}` : ""));
  return response.data;
};

export const getUserById = async (userId: string) => {
  try {
    const axiosInstance = getAxiosInstance('user-management-api')
    const response = await axiosInstance.get(`/getuserbyid?id=${userId}`);
    if (!response.data) {
      throw new Error("User not found");
    }
    return await response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
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