import {AuthResponse} from '@domain';
import axios from 'axios';

export const api = axios.create({
  //  baseURL: 'https://jubas-backend.onrender.com/',
  baseURL: 'http://192.168.1.16:8080/',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(values => {
  console.log(values.url + '/' + JSON.stringify(values.params));
  return values;
});

export function registerToken({
  authCredentials,
}: {
  authCredentials: AuthResponse;
}) {
  api.interceptors.request.use(config => {
    config.headers.Authorization = 'Bearer ' + authCredentials.accessToken;
    return config;
  });
}
