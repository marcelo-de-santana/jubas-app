import {useFetchApi} from '@hooks';
import {userApi} from '../userApi';

export function useUserList() {
  return useFetchApi({
    apiFn: userApi.getList,
  });
}
