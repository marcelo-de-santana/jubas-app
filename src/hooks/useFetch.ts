import {AxiosResponse, isAxiosError} from 'axios';
import {useState} from 'react';

type ApiResponse<TResponse> = Promise<AxiosResponse<TResponse, any>>;
type FetchType<TResponse, TRequest> = (
  request: TRequest,
) => ApiResponse<TResponse>;

export function useFetch<TResponse = any, TRequest = unknown>(
  apiFn: FetchType<TResponse, TRequest>,
) {
  const [data, setData] = useState<TResponse>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean | null>(null);
  const [status, setStatus] = useState<number | undefined | null>(null);

  async function fetch(request: TRequest) {
    console.log("Render")
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
    fetch,
    refresh: fetch,
  };
}
