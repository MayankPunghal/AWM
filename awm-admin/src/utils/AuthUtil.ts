// authUtils.js
import { useNavigate } from 'react-router-dom';
import { showToast } from './ToastUtil';

const TOKEN_KEY = 'token';

const useAuth = () => {
  const navigate = useNavigate();

  const getToken = () => {
    return localStorage.getItem(TOKEN_KEY);
  };

  const setToken = (token: string) => {
    localStorage.setItem(TOKEN_KEY, token);
  };

  const removeToken = () => {
    localStorage.removeItem(TOKEN_KEY);
  };

  const redirectToLogin = () => {
    navigate('/login');
  };

  const checkTokenValidity = () => {
    const token = getToken();
    if (token) {
      try {
        const payload = token != null ? JSON.parse(atob(token.split('.')[1])) : (Math.floor(Date.now() / 1000) - 100);
        
        const currentTimestamp = Math.floor(Date.now() / 1000);
        if (payload.exp < currentTimestamp) {
          removeToken();
          showToast('Token expired. Please login again.', false, 2000);
          setTimeout(() => redirectToLogin(), 2000);
        }
      } catch (error) {
        console.error('Error parsing token payload:', error);
        removeToken();
      }
    }
  };

  return {
    getToken,
    setToken,
    removeToken,
    redirectToLogin,
    checkTokenValidity,
  };
};

export default useAuth;
