import {api} from '@api';
import {
  WorkingHourCreateRequest,
  WorkingHourUpdateRequest,
} from './workingHourRequest';

const PATH = '/working-hours';

async function getList() {
  return await api.get(PATH);
}

async function create(request: WorkingHourCreateRequest) {
  return await api.post(PATH, request);
}

async function update(request: WorkingHourUpdateRequest) {
  return await api.put(PATH + '/' + request.id, request);
}
export const workingHourApi = {
  getList,
  create,
  update,
};
