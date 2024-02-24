import {FlatList, Screen, SpecialtyDescription} from '@components';
import {ScheduleResponse, appointmentUseCases} from '@domain';
import {ScheduleStackProps} from '@routes';
import {useEffect} from 'react';
import {ListRenderItemInfo} from 'react-native';
import {Collapsible} from './components/Collapsible';

export function ScheduleEmployeesScreen({
  navigation,
  route,
}: Readonly<ScheduleStackProps<'ScheduleEmployeesScreen'>>) {
  const {data, fetch, isLoading} = appointmentUseCases.getAll();

  const searchData = () => {
    fetch({specialtyId: route.params.specialty.id});
  };

  useEffect(() => {
    searchData();
  }, []);

  function renderItem({item}: ListRenderItemInfo<ScheduleResponse>) {
    const oneEmployee = data ? data.length === 1 : false;
    return (
      <Collapsible
        employee={item}
        collapsed={!oneEmployee}
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
        ListHeaderComponent={
          <SpecialtyDescription specialty={route.params.specialty} />
        }
        listEmptyTitle="Nenhum funcionário disponível."
        loading={isLoading}
        refetch={searchData}
      />
    </Screen>
  );
}
