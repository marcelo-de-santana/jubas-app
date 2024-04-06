import {QueryKeys} from '@hooks';
import {categoryApi} from './categoryApi';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';

export function useCategoryCreate() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: categoryApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: [QueryKeys.CategoryGetAll]});
    },
  });
}

export function useCategoryGetAll({
  withProfiles = true,
}: {
  withProfiles?: boolean;
} = {}) {
  return useQuery({
    queryKey: [QueryKeys.CategoryGetAll],
    queryFn: () => categoryApi.getAll(withProfiles),
  });
}

export function useCategoryRemove() {
  return useMutation({mutationFn: categoryApi.remove});
}

export function useCategoryUpdate() {
  return useMutation({mutationFn: categoryApi.update});
}
