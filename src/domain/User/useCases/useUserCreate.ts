import {useFetchApi} from '@hooks';
import {UserResponse} from '../UserTypes';
import {userApi} from '../userApi';

interface CreateUserRequest {
  email: string;
  password: string;
  permissionId: number;
}

export function useUserCreate() {
  const state = useFetchApi<UserResponse, CreateUserRequest>({
    apiFn: ({email, password, permissionId}) =>
      userApi.create(email, password, permissionId),
  });

  return {
    create: state.fetchData,
    ...state,
  };
}
