import {QueryClient} from '@tanstack/react-query';
import {QueryKeysType} from './QueryKeys';

type Props = {
  queryClient: QueryClient;
  queryKeys: QueryKeysType[];
};

export function invalidateQueries({queryClient, queryKeys}: Props) {
  queryKeys.forEach(key => {
    queryClient.invalidateQueries({queryKey: [key]});
  });
}
