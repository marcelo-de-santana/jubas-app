import {useFetchApi} from '@hooks';
import {userApi} from '../userApi';
import {UserResponse} from '../UserTypes';

export function useUserListByPermission() {
  return useFetchApi<UserResponse[], {permissionId: number}>({
    apiFn: ({permissionId}) => userApi.getListByPermission(permissionId),
  });
}
