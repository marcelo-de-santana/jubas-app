import {useFetchApi} from '@hooks';
import {categoryApi} from '../categoryApi';

export function useCategoryList() {
  return useFetchApi({
    apiFn: categoryApi.getList,
  });
}
