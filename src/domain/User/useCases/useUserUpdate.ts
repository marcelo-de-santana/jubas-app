import {useFetchApi} from '@hooks';
import {userApi} from '../userApi';
import {UserResponse} from '../UserTypes';

interface UpdateUserRequest {
  userId: string;
  email?: string;
  password?: string;
  permissionId?: number;
}

export function useUserUpdate() {
  return useFetchApi<UserResponse, UpdateUserRequest>({
    apiFn: ({userId, email, password, permissionId}) =>
      userApi.update(userId, email, password, permissionId),
  });
}
