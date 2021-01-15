import axios from 'axios';

const api = axios.create({
  // ip unimed 192.168.137.26
  // ip casa 192.168.15.67
  baseURL: 'http://192.168.15.67:5000/api/v1/',
  timeout: 5000,
});

export default api;
