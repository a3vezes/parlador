import axios from 'axios';

const api = axios.create({

  baseURL: 'http://192.168.15.67:5000/api/v1/',
  timeout: 5000,
});

export default api;
