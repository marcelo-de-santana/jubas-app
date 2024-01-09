import {useFetchApi} from '@hooks';
import {ProfileResponse} from '../profileTypes';
import {profileApi} from '../profileApi';

export interface UpdateProfileRequest {
  id: string;
  name?: string;
  cpf?: string;
  statusProfile?: boolean;
}

export function useProfileUpdate() {
  const state = useFetchApi<ProfileResponse, UpdateProfileRequest>({
    apiFn: ({id, cpf, name, statusProfile}) =>
      profileApi.update(id, name, cpf, statusProfile),
  });

  return {
    ...state,
    update: state.fetchData,
  };
}
