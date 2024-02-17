import {api} from '@services';
import {WorkingHourCreateRequest} from './workingHourRequest';

const PATH = '/working-hours';

async function getList() {
  return await api.get(PATH);
}

async function create(request: WorkingHourCreateRequest) {
  return await api.post(PATH, request);
}

export const workingHourApi = {
  getList,
  create,
};
