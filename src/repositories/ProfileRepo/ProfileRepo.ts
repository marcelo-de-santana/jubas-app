import {DefaultErroAlert} from '@components';
import {api} from '@services';

const PATH = '/profile';

export async function getAllProfilesByUserId(userId: string) {
  try {
    const response = await api.get(`${PATH}/${userId}`);
    return response.data;
  } catch (error) {
    DefaultErroAlert();
  }
}
