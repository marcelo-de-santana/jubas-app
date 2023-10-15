import {api} from '@services';

const PATH = '/category';

export async function getAllCategories() {
  const response = await api.get(PATH);
  return response.data;
}
