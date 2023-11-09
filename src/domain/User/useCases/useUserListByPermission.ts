import {useFetchApi} from '@hooks';
import {userApi} from '../userApi';

export function useUserListByPermission(id: number) {
  return useFetchApi({
    apiFn: () => userApi.getListByPermission(id),
  });
}
