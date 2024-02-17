import {AxiosResponse, isAxiosError} from 'axios';
import {useState} from 'react';

type FetchApiType<TResponse, TRequest = unknown> = {
  apiFn: (request: TRequest) => Promise<AxiosResponse<TResponse, any>>;
};
export function useFetchApi<TResponse = unknown, TRequest = void>({
  apiFn,
}: FetchApiType<TResponse, TRequest>) {
  const [data, setData] = useState<TResponse>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean | null>(null);
  const [status, setStatus] = useState<number | undefined | null>(null);

  async function fetchData(request: TRequest) {
    try {
      setIsLoading(true);
      setIsError(null);
      setStatus(null);
      const response = await apiFn(request);
      setData(response.data);
      setStatus(response.status);
    } catch (error) {
      setIsError(true);
      if (isAxiosError(error)) {
        setStatus(error.response?.status);
      }
    } finally {
      setIsLoading(false);
    }
  }

  return {
    data,
    isLoading,
    isError,
    status,
    fetchData,
    refresh: fetchData
  };
}
