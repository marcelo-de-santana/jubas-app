import {AxiosResponse, isAxiosError} from 'axios';
import {useState} from 'react';

type ApiFetchStateType = {
  apiFn: () => Promise<AxiosResponse<any, any>>;
};

export function useApiFetchState({apiFn}: ApiFetchStateType) {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState<boolean | null>(null);
  const [isError, setError] = useState<boolean | null>(null);
  const [status, setStatus] = useState<number | undefined | null>(null);

  async function fetchData() {
    try {
      setError(null);
      setStatus(null);
      setLoading(true);
      const response = await apiFn();
      setData(response.data);
      setStatus(response.status);
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
