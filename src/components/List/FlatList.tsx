import {flatListStyle} from '@styles';
import {
  FlatListProps as RNFlatListProps,
  FlatList as RNFlatList,
  RefreshControl,
} from 'react-native';
import {ListSeparator} from './ListSeparator';
import {ListEmpty} from './ListEmpty';

interface ListRefreshProps {}

interface FlatListPros<T> extends RNFlatListProps<T> {
  listEmptyTitle?: string;
  isSeparator?: boolean;
  loading: boolean;
  error?: boolean | null;
  refetch?: () => void;
}
/**
 * Component completely
 * @param param0
 * @returns
 */
export function FlatList<T = any>({
  listEmptyTitle,
  loading,
  error,
  isSeparator = true,
  refetch,
  ...props
}: Readonly<FlatListPros<T>>) {
  const SeparatorItem = isSeparator ? <ListSeparator variant="first" /> : null;
  return (
    <RNFlatList
      contentContainerStyle={flatListStyle(props.data)}
      ItemSeparatorComponent={() => SeparatorItem}
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={refetch} />
      }
      ListEmptyComponent={
        <ListEmpty
          title={listEmptyTitle}
          loading={loading}
          error={error}
          refetch={refetch}
        />
      }
      {...props}
    />
  );
}
