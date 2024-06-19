import {QueryKeys, registerMercadoPagoToken} from '@services';
import {useMutation, useQuery} from '@tanstack/react-query';
import {paymentApi} from './paymentApi';

export function useMercadoPagoGetAccessToken() {
  return useMutation({
    mutationFn: paymentApi.getAccessToken,
  });
}

export function usePaymentCreate() {
  return useMutation({mutationFn: paymentApi.create});
}
