import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export function parseError(error) {
  return (
    error.response?.data?.error ||
    (error.response?.data?.details && error.response.data.details[0]?.msg) ||
    error.message ||
    'An unexpected error occurred'
  );
}

export default api;
