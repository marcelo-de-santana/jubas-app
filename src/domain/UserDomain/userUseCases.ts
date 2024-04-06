import {QueryKeys} from '@hooks';
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
    queryKey: ['userGetById'],
    queryFn: () => userApi.getById(userId),
  });
}

export function useUserCreate() {
  return useMutation({mutationFn: userApi.create});
}

export function useUserUpdate() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: userApi.update,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: [QueryKeys.UserGetAll]});
    },
  });
}
