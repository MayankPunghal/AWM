import axios from 'axios';

// Replace with your backend URL
const apiUrl = 'http://127.0.0.1:8000';  // FastAPI default URL

const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
