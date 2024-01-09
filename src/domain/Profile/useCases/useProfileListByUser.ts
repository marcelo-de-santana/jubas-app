import {useFetchApi} from '@hooks';
import {profileApi} from '../profileApi';
import {ProfileResponse} from '../profileTypes';

export function useProfileListByUser() {
  const state = useFetchApi<ProfileResponse[], {userId: string}>({
    apiFn: ({userId}) => profileApi.getListByUser(userId),
  });

  return {
    ...state,
    refresh: state.fetchData,
  };
}
