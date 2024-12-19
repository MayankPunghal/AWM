import axios from "axios";

const apiUrl = "http://localhost:8000";  // Replace with your FastAPI server URL

// Register user
export const registerUser = async (user: {
  username: string;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  gender: string;
}) => {
  const response = await axios.post(`${apiUrl}/users/`, user);
  return response.data;
};

// Get list of users all
// export const getUsers = async () => {
//   const response = await axios.get(`${apiUrl}/users/`);
//   return response.data;
// };
//Get list of users paginated
export const getUsers = async (page: number, size: number) => {
  const response = await axios.get(`${apiUrl}/users?page=${page}&size=${size}`);
  return response.data;
};


// Login user (JWT authentication)
export const loginUser = async (username: string, password: string) => {
  const response = await axios.post(`${apiUrl}/login/`, { username, password });
  return response.data.token;
};
