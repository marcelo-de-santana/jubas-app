import {useFetch} from '@hooks';
import {CategoryResponse} from './categoryResponse';
import {categoryApi} from './categoryApi';
import {CategoryRequest} from './categoryRequest';

//TODO => ENUM
function create() {
  return useFetch<void, string>(categoryApi.create);
}
function update() {
  return useFetch<void, CategoryRequest>(categoryApi.update);
}
function getAll() {
  return useFetch<CategoryResponse[]>(categoryApi.getAll);
}

export const categoryUseCases = {create, update, getAll};
