import {api} from '@services';
import {CategoryRequest} from './categoryRequest';
import {CategorySpecialtiesResponse} from './categoryResponse';

const PATH = '/categories';

async function getAll(
  specialties: boolean,
): Promise<CategorySpecialtiesResponse[]> {
  return (await api.get(PATH, {params: {specialties}})).data;
}

async function create(name: string): Promise<void> {
  return (await api.post(PATH, {name})).data;
}

async function update(request: CategoryRequest): Promise<void> {
  return await api.put(PATH + '/' + request.id, {name: request.name});
}

async function remove(categoryId: number): Promise<void> {
  return await api.delete(PATH + '/' + categoryId);
}
export const categoryApi = {
  getAll,
  create,
  update,
  remove,
};
