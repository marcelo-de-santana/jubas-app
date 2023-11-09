import {useFetchApi} from '@hooks';
import {ProfileResponse} from '../profileTypes';
import {profileApi} from '../profileApi';

export function useProfileListByPermission() {
  const fetchApi = useFetchApi<
    ProfileResponse[],
    {
      permissionId: number;
    }
  >({
    apiFn: ({permissionId}) => profileApi.getListByPermission(permissionId),
  });

  return {
    refetch: () => fetchApi.fetchData({permissionId: 2}),
    ...fetchApi,
  };
}
