import {api} from '@services';
import {
  WorkingHourCreateRequest,
  WorkingHourUpdateRequest,
} from './workingHourRequest';
import {WorkingHourResponse} from './workingHourResponse';

const PATH = '/working-hours';

async function getList(): Promise<WorkingHourResponse[]> {
  return (await api.get(PATH)).data;
}

async function create(request: WorkingHourCreateRequest): Promise<void> {
  return (await api.post(PATH, request)).data;
}

async function update(request: WorkingHourUpdateRequest): Promise<void> {
  return (await api.put(PATH + '/' + request.id, request)).data;
}
export const workingHourApi = {
  getList,
  create,
  update,
};
