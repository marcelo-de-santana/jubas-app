import {profileApi} from './profileApi';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {QueryKeys, invalidateQueries} from '@hooks';

export function useProfileGetAll({
  withUser = false,
}: {withUser?: boolean} = {}) {
  return useQuery({
    queryKey: [QueryKeys.ProfileGetAll],
    queryFn: () => profileApi.getAll(withUser),
  });
}

export function useProfileCreate() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: profileApi.create,
    onSuccess: () =>
      invalidateQueries({
        queryClient,
        queryKeys: ['UserGetAll', 'UserGetById', 'ProfileGetAll'],
      }),
  });
}

export function useProfileRecoveryPassword() {
  return useMutation({mutationFn: profileApi.recoveryPassword});
}

export function useProfileRemove() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: profileApi.remove,
    onSuccess: () => {
      invalidateQueries({
        queryClient,
        queryKeys: ['UserGetAll', 'ProfileGetAll'],
      });
    },
  });
}

export function useProfileUpdate() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: profileApi.update,
    onSuccess: () => {
      invalidateQueries({
        queryClient,
        queryKeys: [
          QueryKeys.UserGetAll,
          QueryKeys.UserGetById,
          QueryKeys.ProfileGetAll,
          QueryKeys.EmployeeGetAll,
        ],
      });
    },
  });
}
