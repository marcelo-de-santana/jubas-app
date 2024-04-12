import {QueryClient} from '@tanstack/react-query';

export enum QueryKeys {
  AppointmentGetAll = 'AppointmentGetAll',
  AppointmentGetById = 'AppointmentGetById',
  DaysOfAttendance = 'DaysOfAttendance',
  CategoryGetAll = 'CategoryGetAll',
  EmployeeGetAll = 'EmployeeGetAll',
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
