import {useFetch} from '@hooks';
import {
  CategoryResponse,
  CategorySpecialtiesResponse,
} from './categoryResponse';
import {categoryApi} from './categoryApi';
import {CategoryRequest} from './categoryRequest';

function create() {
  return useFetch<void, string>(categoryApi.create);
}
function getAll() {
  return useFetch<CategoryResponse[]>(categoryApi.getAll);
}
function getCategoriesAndSpecialties() {
  return useFetch<CategorySpecialtiesResponse[]>(
    categoryApi.getCategoriesAndSpecialties,
  );
}
function remove() {
  return useFetch<void, number>(categoryApi.remove);
}
function update() {
  return useFetch<void, CategoryRequest>(categoryApi.update);
}

export const categoryUseCases = {
  create,
  getAll,
  getCategoriesAndSpecialties,
  update,
  remove,
};
