import {
  Box,
  FlatList,
  ListSeparator,
  Screen,
  SpecialtyDescription,
  Text,
} from '@components';
import {AppointmentResponse, appointmentUseCases} from '@domain';
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

  function renderItem({item}: ListRenderItemInfo<AppointmentResponse>) {
    const oneEmployee = data ? data.length === 1 : false;
    return (
      <Collapsible
        appointment={item}
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
        ListHeaderComponent={<Header route={route} />}
        listEmptyTitle="Nenhum funcionário disponível."
        loading={isLoading}
        refetch={searchData}
      />
    </Screen>
  );
}

function Header({
  route,
}: Readonly<Pick<ScheduleStackProps<'ScheduleEmployeesScreen'>, 'route'>>) {
  return (
    <>
      <SpecialtyDescription specialty={route.params.specialty} />
      <ListSeparator mb="s12" />
      <Box>
        <Text variant="paragraphMedium" textAlign="justify">
          Descrição do atendimento
        </Text>
        <Box borderRadius="s6" padding="s12">
          <Text color="primaryContrast" textAlign="justify">
            {`Dia: ${route.params.day}`}
          </Text>
        </Box>
      </Box>
    </>
  );
}
