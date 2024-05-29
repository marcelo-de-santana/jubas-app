import {QueryKeys} from '@services';
import {useQuery} from '@tanstack/react-query';
import {paymentApi} from './paymentApi';

export function useMercadoGetAccessToken() {
  return useQuery({
    queryKey: [QueryKeys.PaymentAccessToken],
    queryFn: paymentApi.getAccessToken,
  });
}
