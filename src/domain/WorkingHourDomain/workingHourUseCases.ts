import {useFetch} from '@hooks';
import {
  WorkingHourCreateRequest,
  WorkingHourUpdateRequest,
} from './workingHourRequest';
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
function update() {
  return useFetch<void, WorkingHourUpdateRequest>(workingHourApi.update);
}

export const workingHourUseCases = {
  create,
  getAll,
  update,
};
