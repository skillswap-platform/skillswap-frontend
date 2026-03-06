import axios from 'axios';

// centralized axios instance with common settings
const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// attach JWT token to every request if present
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// helper to extract message from error objects
export function parseError(error) {
  return (
    error.response?.data?.error ||
    (error.response?.data?.details && error.response.data.details[0]?.msg) ||
    error.message ||
    'An unexpected error occurred'
  );
}

// global response interceptor to display errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const msg = parseError(error);
    if (typeof window !== 'undefined') {
      alert(msg);
    }
    return Promise.reject(error);
  }
);

export default api;
