import {useEffect} from 'react';
import {categoryApi} from '@domain';
import {useApiFetchState} from '@infra';

export function useCategoryList() {
  const {data, fetchData, isError, isLoading, status} = useApiFetchState({
    apiFn: categoryApi.getList,
  });

  useEffect(() => {
    fetchData();
  }, []);

  return {
    categoryList: data,
    isLoading,
    isError,
    status,
    refresh: fetchData,
  };
}
