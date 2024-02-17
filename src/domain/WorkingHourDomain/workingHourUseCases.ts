import {useFetch} from '@hooks';
import {WorkingHourCreateRequest} from './workingHourRequest';
import {WorkingHourResponse} from './workingHourResponse';
import {workingHourApi} from './workingHourApi';

function create() {
  return useFetch<WorkingHourResponse, WorkingHourCreateRequest>(
    workingHourApi.create,
  );
}
function getAll() {
  return useFetch<WorkingHourResponse[]>(workingHourApi.getList);
}

export const workingHoursUseCases = {
  create,
  getAll,
};
