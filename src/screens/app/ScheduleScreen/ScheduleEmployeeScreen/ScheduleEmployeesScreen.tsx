import {FlatList, Screen} from '@components';
import {EmployeeScheduleResponse, useAppointmentGetAll} from '@domain';
import {ScheduleStackProps} from '@routes';
import {useEffect} from 'react';
import {ListRenderItemInfo} from 'react-native';
import {Collapsible} from './components/Collapsible';
import {Header} from './components/Header';

export function ScheduleEmployeesScreen({
  navigation,
  route,
}: Readonly<ScheduleStackProps<'ScheduleEmployeesScreen'>>) {
  const {data, mutate, isPending} = useAppointmentGetAll();

  const searchData = () => {
    mutate({
      date: route.params.day,
    });
  };

  useEffect(() => {
    searchData();
  }, []);

  function renderItem({item}: ListRenderItemInfo<EmployeeScheduleResponse>) {
    return (
      <Collapsible
        appointment={item}
        collapsed={false}
        navigation={navigation}
        route={route}
      />
    );
  }

  return (
    <Screen flex={1}>
      <FlatList
        data={data}
        renderItem={renderItem}
        isSeparator={false}
        ListHeaderComponent={<Header route={route} />}
        listEmptyTitle="Nenhum funcionário disponível."
        loading={isPending}
        refetch={searchData}
      />
    </Screen>
  );
}
