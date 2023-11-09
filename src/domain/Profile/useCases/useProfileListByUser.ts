import {useFetchApi} from '@hooks';
import {profileApi} from '../profileApi';

export function useProfileListByUser(userId: string) {
  const state = useFetchApi({
    apiFn: () => profileApi.getListByUser(userId),
  });

  return {
    ...state,
    refresh: state.fetchData,
  };
}
