import {useFetchApi} from '@hooks';
import {specialtyApi} from '../SpecialtyApi';
import {SpecialtyResponse} from '../SpecialtyTypes';

export interface SpecialtyRequestToCreate {
  categoryId: number;
  specialtyName: string;
}

export function useSpecialtyCreate() {
  const state = useFetchApi<SpecialtyResponse, SpecialtyRequestToCreate>({
    apiFn: ({categoryId, specialtyName}) =>
      specialtyApi.create(categoryId, specialtyName),
  });

  return {
    create: state.fetchData,
    ...state,
  };
}
