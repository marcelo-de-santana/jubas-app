import {useFetchApi} from '@hooks';
import {UserResponse} from '../UserTypes';
import {userApi} from '../userApi';

interface UserRequestToCreate {
  email: string;
  password: string;
  permissionId: number;
}

export function useUserCreate() {
  return useFetchApi<UserResponse, UserRequestToCreate>({
    apiFn: ({email, password, permissionId}) =>
      userApi.create(email, password, permissionId),
  });
}
