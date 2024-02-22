import {Box, BoxTimeAvailable, FlatList, Screen, Text} from '@components';
import {ScheduleResponse, appointmentUseCases} from '@domain';
import {theme} from '@styles';
import {useEffect} from 'react';
import {ListRenderItemInfo, View} from 'react-native';

export function ScheduleListScreen() {
  const {data, fetch, isLoading, isError, refresh} =
    appointmentUseCases.getAll();

  useEffect(() => {
    fetch();
  }, []);

  function renderItem({item}: ListRenderItemInfo<ScheduleResponse>) {
    return (
      <View>
        <Text fontSize="XL" textAlign="justify">
          {item.employeeName}
        </Text>
        <Box>
          {item?.workingHours.map(workingHour => (
            <BoxTimeAvailable
              key={workingHour.time}
              scheduleTime={workingHour}
            />
          ))}
        </Box>
      </View>
    );
  }

  return (
    <Screen>
      <FlatList
        data={data}
        renderItem={renderItem}
        listEmptyTitle="Não foi possível listar a agenda."
        loading={isLoading}
        error={isError}
        refetch={refresh}
      />
    </Screen>
  );
}
