import {useFetchApi} from '@hooks';
import {mask} from '@utils';
import {ProfileResponse} from '../profileTypes';
import {profileApi} from '../profileApi';

export interface ProfileRequestToMinimalUpdate {
  id: string;
  name: string;
  cpf: string;
  statusProfile: boolean;
}

export function useProfileUpdate() {
  const state = useFetchApi<ProfileResponse, ProfileRequestToMinimalUpdate>({
    apiFn: ({id, cpf, name, statusProfile}) =>
      profileApi.update(id, name, mask.removeCpf(cpf), statusProfile),
  });

  return {
    ...state,
    update: state.fetchData,
  };
}
