import {AxiosResponse, isAxiosError} from 'axios';
import {useState} from 'react';

type FetchApiType<TResponse, TRequest = unknown> = {
  apiFn: (request: TRequest) => Promise<AxiosResponse<TResponse, any>>;
};
export function useFetchApi<TResponse = unknown, TRequest = void>({
  apiFn,
}: FetchApiType<TResponse, TRequest>) {
  const [data, setData] = useState<TResponse>();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<boolean | null>(null);
  const [status, setStatus] = useState<number | undefined | null>(null);

  async function fetchData(request: TRequest) {
    try {
      setLoading(true);
      setError(null);
      setStatus(null);
  //    setTimeout(async () => {
        const response = await apiFn(request);
        setData(response.data);
        setStatus(response.status);
//      },2000);
    } catch (error) {
      setError(true);
      if (isAxiosError(error)) {
        setStatus(error.response?.status);
      }
    } finally {
      setLoading(false);
    }
  }

  return {
    data,
    isLoading,
    isError,
    status,
    fetchData,
  };
}
