import {api} from '@services';

async function getAccessToken(): Promise<{accessToken: string}> {
  const {data} = await api.get('payment/token');
  return data.accessToken;
}

export const paymentApi = {
  getAccessToken,
};
