import axios from 'axios';

export const api = axios.create({
  //  baseURL: 'https://jubas-backend.onrender.com/',
   baseURL: 'http://192.168.1.16:8080/',
  headers: {
    'Content-Type': 'application/json',
  },
});
