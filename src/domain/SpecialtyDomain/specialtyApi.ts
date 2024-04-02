import {api} from '@api';
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

async function remove(specialtyId: string) {
  return await api.delete(PATH + '/' + specialtyId);
}

export const specialtyApi = {
  getAll,
  create,
  update,
  remove,
};
