import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.abqm.com.br:3333',
});

export default api;
