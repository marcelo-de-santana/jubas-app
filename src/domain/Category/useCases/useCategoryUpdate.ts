import {useFetchApi} from '@hooks';
import {categoryApi} from '../categoryApi';

export function useCategoryUpdate(id: number, name: string) {
  return useFetchApi({apiFn: () => categoryApi.update(id, name)});
}
