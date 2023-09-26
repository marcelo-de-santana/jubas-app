import {DefaultErroAlert} from '@components';
import {api} from '@services';

const PATH = '/working-hours';

export async function getAllWorkingHours() {
  try {
    const response = await api.get(PATH);
    return response.data;
  } catch (error) {
    DefaultErroAlert();
  }
}
