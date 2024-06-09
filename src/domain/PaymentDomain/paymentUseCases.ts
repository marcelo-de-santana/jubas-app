import {QueryKeys} from '@services';
import {useMutation, useQuery} from '@tanstack/react-query';
import {paymentApi} from './paymentApi';


export function useMercadoGetAccessToken() {
  return useQuery({
    queryKey: [QueryKeys.PaymentAccessToken],
    queryFn: paymentApi.getAccessToken,
  });
}

export function usePaymentGetMethods({bin}: {bin: string}) {
  return useQuery({
    queryKey: [QueryKeys.PaymentGetMethods, bin],
    // queryFn: () => getPaymentMethods({bin: '50314332'}),
  });
}

export function usePaymentCreate(){
  return useMutation({mutationFn: paymentApi.create})
}

export function usePaymentCreateCardToken() {
  // return useMutation({mutationFn: createCardToken});
}
