import {AxiosResponse, isAxiosError} from 'axios';
import {useState} from 'react';

interface UseFetchResponse<TResponse, TRequest> {
  data: TResponse | undefined;
  isLoading: boolean;
  isError: boolean | null;
  status: number | null;
  fetch: (request: TRequest) => Promise<void>;
  refresh: (request: TRequest) => Promise<void>;
}

type ApiResponse<TResponse> = Promise<AxiosResponse<TResponse, any>>;
type FetchType<TResponse, TRequest> = (
  request: TRequest,
) => ApiResponse<TResponse>;

export function useFetch<TResponse = any, TRequest = void>(
  apiFn: FetchType<TResponse, TRequest>,
): UseFetchResponse<TResponse, TRequest> {
  const [data, setData] = useState<TResponse>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean | null>(null);
  const [status, setStatus] = useState<number | null>(null);

  async function fetch(request: TRequest) {
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
        console.warn(error.message)
        if (error.response?.status) {
          setStatus(error.response.status);
        }
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
