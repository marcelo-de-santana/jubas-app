import {flatListStyle} from '@styles';
import {
  FlatListProps as RNFlatListProps,
  FlatList as RNFlatList,
  RefreshControl,
} from 'react-native';
import {Separator} from '../Box/Separator';
import {EmptyList} from '../Box/EmptyList';

interface ListRefreshProps {}

interface FlatListPros<T> extends RNFlatListProps<T> {
  listEmptyTitle?: string;
  loading: boolean;
  error: boolean | null;
  refetch: () => void;
}

export function FlatList<T = any>({
  listEmptyTitle,
  loading,
  error,
  refetch,
  ...props
}: Readonly<FlatListPros<T>>) {
  return (
    <RNFlatList
      contentContainerStyle={flatListStyle(props.data)}
      ItemSeparatorComponent={Separator}
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={refetch} />
      }
      ListEmptyComponent={
        <EmptyList
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
