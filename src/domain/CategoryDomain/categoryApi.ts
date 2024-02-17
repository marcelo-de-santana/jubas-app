import {api} from '@services';
import {CategoryRequest} from './categoryRequest';

const PATH = '/category';

async function getAll() {
  return await api.get(PATH);
}

async function create(name: string) {
  return await api.post(PATH, {name});
}

async function update(request: CategoryRequest) {
  return await api.put(`${PATH}/${request.id}`, {name: request.name});
}

export const categoryApi = {
  getAll,
  create,
  update,
};
