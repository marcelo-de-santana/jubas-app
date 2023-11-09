import {useFetchApi} from '@hooks';
import {employeeApi} from '../employeeApi';
import {EmployeeResponse} from '../employeeTypes';

type EmployeeRequestToCreate = {profileId: string; workingHourId: number};

export function useEmployeeCreate() {
  const state = useFetchApi<EmployeeResponse, EmployeeRequestToCreate>({
    apiFn: ({profileId, workingHourId}) =>
      employeeApi.create(profileId, workingHourId),
  });
  return {
    create: state.fetchData,
    ...state,
  };
}
