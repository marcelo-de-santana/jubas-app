import {api} from '@api';
import {CategoryRequest} from './categoryRequest';

const PATH = '/categories';

async function getAll(specialties: boolean) {
  return await api.get(PATH, {params: {specialties}});
}

async function create(name: string) {
  return await api.post(PATH, {name});
}

async function update(request: CategoryRequest) {
  return await api.put(PATH + '/' + request.id, {name: request.name});
}

async function remove(categoryId: number) {
  return await api.delete(PATH + '/' + categoryId);
}
export const categoryApi = {
  getAll,
  create,
  update,
  remove,
};
