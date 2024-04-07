import {QueryKeys, invalidateQueries} from '@hooks';
import {userApi} from './userApi';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';

export function useUserGetAll({
  withProfiles = true,
}: {withProfiles?: boolean} = {}) {
  return useQuery({
    queryKey: [QueryKeys.UserGetAll],
    queryFn: () => userApi.getAll(withProfiles),
  });
}

export function useUserGetById(userId: string) {
  return useQuery({
    queryKey: [QueryKeys.UserGetById],
    queryFn: () => userApi.getById(userId),
  });
}

export function useUserCreate() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: userApi.create,
    onSuccess: () =>
      invalidateQueries({queryClient, queryKeys: [QueryKeys.UserGetAll]}),
  });
}

export function useUserUpdate() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: userApi.update,
    onSuccess: () => {
      invalidateQueries({queryClient, queryKeys: [QueryKeys.UserGetAll]});
    },
  });
}
