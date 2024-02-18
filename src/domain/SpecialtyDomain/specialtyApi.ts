import {api} from '@services';
import {SpecialtyCreateRequest} from './specialtyRequest';

const PATH = '/specialties';

async function getAll() {
  return await api.get(PATH);
}

async function create(request: SpecialtyCreateRequest) {
  return await api.post(PATH, request);
}

export const specialtyApi = {
  getAll,
  create,
};
