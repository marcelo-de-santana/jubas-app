import {useFetchApi} from '@hooks';
import {WorkingHoursResponse} from '../workingHoursTypes';
import {workingHoursApi} from '../WorkingHoursApi';

export interface WorkingHoursRequestToCreate {
  startTime: string;
  startInterval: string;
  endInterval: string;
  endTime: string;
}

export function useWorkingHoursCreate() {
  const state = useFetchApi<WorkingHoursResponse, WorkingHoursRequestToCreate>({
    apiFn: ({startTime, endTime, startInterval, endInterval}) =>
      workingHoursApi.create(startTime, endTime, startInterval, endInterval),
  });

  return {
    create: state.fetchData,
    ...state,
  };
}
