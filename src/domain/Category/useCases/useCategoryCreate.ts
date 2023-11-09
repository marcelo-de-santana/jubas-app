import {useFetchApi} from '@hooks';
import {categoryApi} from '../categoryApi';

export function useCategoryCreate(name: string) {
  return useFetchApi({apiFn: () => categoryApi.create(name)});
}
