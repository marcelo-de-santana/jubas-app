import {api} from '@services';
import {CategoryRequest} from './categoryRequest';

const PATH = '/categories';

async function getAll() {
  return await api.get(PATH);
}

async function getCategoriesAndSpecialties() {
  return await api.get(`${PATH}/specialties`);
}

async function create(name: string) {
  return await api.post(PATH, name);
}

async function update(request: CategoryRequest) {
  return await api.patch(`${PATH}/${request.id}`, request.name);
}

async function remove(categoryId: string) {
  return await api.delete(`${PATH}/${categoryId}`);
}
export const categoryApi = {
  getAll,
  getCategoriesAndSpecialties,
  create,
  update,
  remove,
};
