import {useFetchApi} from '@hooks';
import {specialtyApi} from '../SpecialtyApi';
import {SpecialtyResponse} from '../SpecialtyTypes';

export function useSpecialtyList() {
  const state = useFetchApi<SpecialtyResponse[]>({
    apiFn: specialtyApi.getList,
  });

  return {
    getList: state.fetchData,
    reflect: state.fetchData,
    ...state,
  };
}
