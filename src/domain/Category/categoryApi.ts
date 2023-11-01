import {Alert} from '@components';
import {api} from '@services';

const PATH = '/category';

async function getList() {
  return await api.get(PATH);
}

async function create(name: string) {
  return await api.post(PATH, {name});
  // Alert({
  //   type: 'alert',
  //   message: `Categoria "${response.data?.name}" criada com sucesso.`,
  // });
}

async function update(id: number, name: string) {
  return await api.put(`${PATH}/${id}`, {name});
}

export const categoryApi = {
  getList,
  create,
  update,
};
