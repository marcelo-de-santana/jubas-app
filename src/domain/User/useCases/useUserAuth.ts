import {useFetchApi} from '@hooks';
import {UserResponse} from '../UserTypes';
import {userApi} from '../userApi';

export interface AuthUserRequest {
  email: string;
  password: string;
}

export function useUserAuth() {
  return useFetchApi<UserResponse, AuthUserRequest>({
    apiFn: ({email, password}) => userApi.auth(email, password),
  });
}
