import {Alert} from '@components';
import {api} from '@services';
import {CategoryToUpdateRequestDTO} from './CategoryType';

const PATH = '/category';

export async function getAllCategories() {
  const response = await api.get(PATH);
  return response.data;
}

export async function createCategory(name: string) {
  const response = await api.post(PATH, {name});
  Alert({message: `Categoria "${response.data?.name}" criada com sucesso.`});
}

export async function updateCategory({id, name}: CategoryToUpdateRequestDTO) {
  const response = await api.put(`${PATH}/${id}`, {name});
  Alert({message: `Categoria "${response.data.name}" atualizada com sucesso.`});
}
