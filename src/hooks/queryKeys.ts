import {QueryClient} from '@tanstack/react-query';

export enum QueryKeys {
  AppointmentGetSchedule = 'AppointmentGetSchedule',
  AppointmentGetAll = 'AppointmentGetAll',
  AppointmentGetById = 'AppointmentGetById',
  AppointmentGetByUserId = 'AppointmentGetByUserId',
  FeedbackGetById = 'FeedbackGetById',
  DaysOfAttendance = 'DaysOfAttendance',
  CategoryGetAll = 'CategoryGetAll',
  EmployeeGetAll = 'EmployeeGetAll',
  EmployeeGetAvailableSpecialties = 'EmployeeGetAvailableSpecialties',
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
