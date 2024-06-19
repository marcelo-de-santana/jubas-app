import {useMercadoPagoGetAccessToken} from '@domain';
import axios from 'axios';

export const apiMercadoPago = axios.create({
  baseURL: 'https://api.mercadopago.com',
});

export function registerMercadoPagoToken(accessToken: string) {
  apiMercadoPago.interceptors.request.use(
    config => {
      config.headers.Authorization = 'Bearer ' + accessToken;
      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );
}
