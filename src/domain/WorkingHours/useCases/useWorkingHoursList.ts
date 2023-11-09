import {useFetchApi} from '@hooks';
import {WorkingHoursResponse} from '../workingHoursTypes';
import {workingHoursApi} from '../WorkingHoursApi';

export function useWorkingHoursList() {
  const state = useFetchApi<WorkingHoursResponse[]>({
    apiFn: workingHoursApi.getList,
  });
  return {
    getList: state.fetchData,
    ...state,
  };
}
