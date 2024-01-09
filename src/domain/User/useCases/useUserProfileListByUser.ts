import {useFetchApi} from '@hooks';
import {userApi} from '../userApi';
import {UserProfileResponse} from '../UserTypes';

export function useUserProfileListByUser() {
  const state = useFetchApi<UserProfileResponse, {userId: string}>({
    apiFn: ({userId}) => userApi.getProfilesById(userId),
  });

  return {
    ...state,
    user: state.data,
    refresh: state.fetchData,
  };
}
