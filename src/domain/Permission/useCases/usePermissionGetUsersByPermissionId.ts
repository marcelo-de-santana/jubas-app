import {useFetchApi} from '@hooks';
import {permissionApi} from '../permissionApi';
import {PermissionUserResponse} from '../PermissionTypes';

export function usePermissionGetUsersByPermissionId() {
  const responseApi = useFetchApi<
    PermissionUserResponse,
    {permissionId: number}
  >({
    apiFn: ({permissionId}) =>
      permissionApi.getUsersByPermissionId(permissionId),
  });

  return {
    ...responseApi,
    permission: responseApi.data,
  };
}
