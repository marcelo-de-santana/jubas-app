import {useFetchApi} from '@hooks';
import {employeeApi} from '../employeeApi';
import {EmployeeResponse} from '../employeeTypes';

interface EmployeeRequestToUpdate {
  employeeId: string;
  profileId: string | null;
  workingHourId: number | null;
}

export function useEmployeeUpdate() {
  const state = useFetchApi<EmployeeResponse, EmployeeRequestToUpdate>({
    apiFn: ({employeeId, profileId, workingHourId}) =>
      employeeApi.update(employeeId, profileId, workingHourId),
  });

  return {
    update: state.fetchData,
    ...state,
  };
}
