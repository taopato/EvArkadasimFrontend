import axios from 'axios';

const API_BASE_URL = 'http://192.168.1.102:7000/api'; // Güncellenmiş IP adresi

const api = axios.create({
  baseURL: API_BASE_URL,
});

export default api;
