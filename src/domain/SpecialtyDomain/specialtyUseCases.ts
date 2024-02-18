import {useFetch} from '@hooks';
import {SpecialtyResponse} from './specialtyResponse';
import {SpecialtyCreateRequest} from './specialtyRequest';
import {specialtyApi} from './specialtyApi';

function create() {
  return useFetch<SpecialtyResponse, SpecialtyCreateRequest>(
    specialtyApi.create,
  );
}

function getAll() {
  return useFetch<SpecialtyResponse[]>(specialtyApi.getAll);
}

export const specialtyUseCases = {create, getAll};