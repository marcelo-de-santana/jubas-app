import axios from 'axios';

export const apiMercadoPago = axios.create({
  baseURL: 'https://api.mercadopago.com',
});

apiMercadoPago.interceptors.request.use(
  config => {
    config.headers.Authorization =
      'Bearer ' + process.env.REACT_APP_MERCADO_PAGO_PUBLIC_KEY;
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
