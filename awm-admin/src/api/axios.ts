import axios from 'axios';

// Replace with your backend URL
const apiUrl = process.env.REACT_APP_API_URL;
console.log("axios token : "+`${localStorage.getItem('token')}`)
const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    'Authorization' : `Bearer ${localStorage.getItem('token')}`,
  }
});

export default axiosInstance;
