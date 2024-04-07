import {QueryClient} from '@tanstack/react-query';

export enum QueryKeys {
  CategoryGetAll = 'CategoryGetAll',
  SpecialtyGetAll = 'SpecialtyGetAll',
  ProfileGetAll = 'ProfileGetAll',
  UserGetAll = 'UserGetAll',
  UserGetById = 'UserGetById',
  WorkingHourGetAll = 'WorkingHourGetAll',
}

export function invalidateQueries({
  queryClient,
  queryKeys,
}: InvalidateQueriesProps) {
  queryKeys.forEach(key => {
    queryClient.invalidateQueries({queryKey: [key]});
  });
}

type InvalidateQueriesProps = {
  queryClient: QueryClient;
  queryKeys: QueryKeysType[];
};
export type QueryKeysType = keyof typeof QueryKeys;
