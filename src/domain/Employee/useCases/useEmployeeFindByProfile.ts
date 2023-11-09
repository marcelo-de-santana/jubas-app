import {useFetchApi} from '@hooks';
import {EmployeeResponse} from '../employeeTypes';
import {employeeApi} from '../employeeApi';

export function useEmplyeeFindByProfile() {
  const state = useFetchApi<
    EmployeeResponse,
    {
      profileId: string;
    }
  >({
    apiFn: ({profileId}) => employeeApi.findByProfileId(profileId),
  });

  return {
    employee: state.data,
    ...state,
  };
}
