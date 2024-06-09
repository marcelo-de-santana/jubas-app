import {api} from '@services';

const PATH = '/payments';

interface PaymentRequest {
  appointmentId: string;
  paymentMethod: string;
}

async function getAccessToken(): Promise<{accessToken: string}> {
  const {data} = await api.get('payment/token');
  return data.accessToken;
}

async function create(request: PaymentRequest) {
  const {data} = await api.post(PATH, request);
  return data;
}

export const paymentApi = {
  getAccessToken,
  create,
};
