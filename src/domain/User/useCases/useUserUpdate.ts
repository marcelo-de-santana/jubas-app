import {useFetchApi} from '@hooks';
import {userApi} from '../userApi';

export function useUserUpdate(
  userId: string,
  email: string,
  password: string,
  permissionId: number,
) {
  return useFetchApi({
    apiFn: () => userApi.update(userId, email, password, permissionId),
  });
}
