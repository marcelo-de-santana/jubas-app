import {api} from '@services';

const PATH = '/appointments';

async function getAll() {
  return await api.get(PATH);
}
export const appointmentApi = {
  getAll,
};
