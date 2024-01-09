import {useFetchApi} from '@hooks';
import {profileApi} from '../profileApi';

export function useProfileRemove() {
  const state = useFetchApi<void, {profileId: string}>({
    apiFn: ({profileId}) => profileApi.remove(profileId),
  });

  return {
    ...state,
    remove: state.fetchData,
  };
}
