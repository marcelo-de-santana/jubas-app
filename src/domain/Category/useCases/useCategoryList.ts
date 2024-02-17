import {useFetchApi} from '@hooks';
import {categoryApi} from '../categoryApi';
import {CategoryResponse} from '../categoryTypes';

export function useCategoryList() {
  const response = useFetchApi<CategoryResponse[]>({
    apiFn: categoryApi.getList,
  });
  return {
    ...response,
    categoryList: response.data,
  };
}
