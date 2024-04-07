import {QueryKeys, invalidateQueries} from '@hooks';
import {workingHourApi} from './workingHourApi';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';

export function useWorkingHourCreate() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: workingHourApi.create,
    onSuccess: () => {
      invalidateQueries({
        queryClient,
        queryKeys: [QueryKeys.WorkingHourGetAll],
      });
    },
  });
}

export function useWorkingHourGetAll() {
  return useQuery({
    queryKey: [QueryKeys.WorkingHourGetAll],
    queryFn: workingHourApi.getList,
  });
}

export function useWorkingHourUpdate() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: workingHourApi.update,
    onSuccess: () => {
      invalidateQueries({
        queryClient,
        queryKeys: [QueryKeys.WorkingHourGetAll],
      });
    },
  });
}
