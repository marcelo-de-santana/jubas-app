import {api} from '@services';
import {SpecialtyCreateRequest, SpecialtyRequest} from './specialtyRequest';

const PATH = '/specialties';

async function getAll() {
  return await api.get(PATH);
}

async function create(request: SpecialtyCreateRequest) {
  return await api.post(PATH, request);
}

async function update(request: SpecialtyRequest) {
  return await api.patch(PATH + '/' + request.id, request);
}

export const specialtyApi = {
  getAll,
  create,
  update,
};
