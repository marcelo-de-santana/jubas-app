import {Alert} from '@components';
import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://jubas-backend.onrender.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const interceptor = api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 500) {
      Alert();
    }
    return Promise.reject(error);
  },
);
