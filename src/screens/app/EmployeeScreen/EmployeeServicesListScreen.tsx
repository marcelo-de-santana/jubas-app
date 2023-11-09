import {BoxItem, EmptyList, Screen} from '@components';
import {useWorkingHoursList} from '@domain';
import {EmployeeServicesListScreenProps} from '@routes';
import {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

export function EmployeeServicesListScreen({}: EmployeeServicesListScreenProps) {
  const {data, isLoading, status} = useWorkingHoursList();

  useEffect(() => {}, []);

  return (
    <Screen>
      <FlatList
        data={[]}
        renderItem={({item}) => (
          <BoxItem label={item.name} onPress={() => {}} />
        )}
        contentContainerStyle={{
          flex: data?.length !== 0 ? 1 : undefined,
        }}
        ListEmptyComponent={EmptyList}
      />
    </Screen>
  );
}
