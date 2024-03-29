import {useFetch} from '@hooks';
import {SpecialtyResponse} from './specialtyResponse';
import {SpecialtyCreateRequest, SpecialtyRequest} from './specialtyRequest';
import {specialtyApi} from './specialtyApi';

function create() {
  return useFetch<SpecialtyResponse, SpecialtyCreateRequest>(
    specialtyApi.create,
  );
}
function getAll() {
  return useFetch<SpecialtyResponse[]>(specialtyApi.getAll);
}
function update() {
  return useFetch<void, SpecialtyRequest>(specialtyApi.update);
}
function remove() {
  return useFetch<void, string>(specialtyApi.remove);
}

export const specialtyUseCases = {create, getAll, update, remove};
