import {api} from '@services';

const PATH = '/specialty';

async function getList() {
  return await api.get(PATH);
}

async function create(categoryId: number, name: string) {
  return await api.post(PATH, {
    name,
    categoryId,
  });
}

export const specialtyApi = {
  getList,
  create,
};
