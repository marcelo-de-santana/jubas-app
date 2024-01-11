import {useFetchApi} from '@hooks';
import {UserPermissionResponse} from '../UserTypes';
import {userApi} from '../userApi';

export interface AuthUserRequest {
  email: string;
  password: string;
}

export function useUserAuth() {
  return useFetchApi<UserPermissionResponse, AuthUserRequest>({
    apiFn: ({email, password}) => userApi.auth(email, password),
  });
}
