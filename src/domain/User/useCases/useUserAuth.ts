import {useFetchApi} from '@hooks';
import {UserResponse} from '../UserTypes';
import {userApi} from '../userApi';

export interface UserRequestToAuth {
  email: string;
  password: string;
}

export function useUserAuth() {
  return useFetchApi<UserResponse, UserRequestToAuth>({
    apiFn: ({email, password}) => userApi.auth(email, password),
  });
}
