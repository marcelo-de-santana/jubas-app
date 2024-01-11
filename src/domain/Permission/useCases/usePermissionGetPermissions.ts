import {useFetchApi} from '@hooks';
import {permissionApi} from '../permissionApi';
import {PermissionResponse} from '../PermissionTypes';

export function usePermissionGetPermissions() {
  const responseApi = useFetchApi<PermissionResponse[]>({
    apiFn: permissionApi.getPermissions,
  });

  return {
    ...responseApi,
    permissions: responseApi.data,
  };
}
