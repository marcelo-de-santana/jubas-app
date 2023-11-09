import {BoxItem, EmptyList, Screen} from '@components';
import {useWorkingHoursList} from '@domain';
import {EmployeeScreenProps} from '@routes';
import {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

export function EmployeeServicesListScreen({
  navigation,
}: EmployeeScreenProps<'EmployeeServicesListScreen'>) {
  const {data, isLoading, status} = useWorkingHoursList();

  useEffect(() => {}, []);

  return (
    <Screen>
      {/* <FlatList
        data={[]}
        contentContainerStyle={{
          flex: data?.length !== 0 ? 1 : undefined,
        }}
        ListEmptyComponent={EmptyList}
      /> */}
    </Screen>
  );
}
