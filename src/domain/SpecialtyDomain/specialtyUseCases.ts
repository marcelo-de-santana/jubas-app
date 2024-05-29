import {QueryKeys, invalidateQueries} from '@services';
import {specialtyApi} from './specialtyApi';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';

export function useSpecialtyCreate() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: specialtyApi.create,
    onSuccess: () => {
      invalidateQueries({
        queryClient,
        queryKeys: [QueryKeys.CategoryGetAll],
      });
    },
  });
}
export function useSpecialtyGetAll() {
  return useQuery({
    queryKey: [QueryKeys.SpecialtyGetAll],
    queryFn: specialtyApi.getAll,
  });
}
export function useSpecialtyUpdate() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: specialtyApi.update,
    onSuccess: () => {
      invalidateQueries({queryClient, queryKeys: [QueryKeys.CategoryGetAll]});
    },
  });
}
export function useSpecialtyRemove() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: specialtyApi.remove,
    onSuccess: () => {
      invalidateQueries({
        queryClient,
        queryKeys: [QueryKeys.CategoryGetAll],
      });
    },
  });
}
