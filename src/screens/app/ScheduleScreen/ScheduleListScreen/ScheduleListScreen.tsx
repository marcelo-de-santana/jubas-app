import {BoxTimeAvailable, FlatList, Screen, Text} from '@components';
import {ScheduleResponse, appointmentUseCases} from '@domain';
import {themeRegistry} from '@styles';
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
        <Text size="XL" align="justify">
          {item.employeeName}
        </Text>
        <View style={themeRegistry.boxFlexRow}>
          {item?.workingHours.map(workingHour => (
            <BoxTimeAvailable
              key={workingHour.time}
              scheduleTime={workingHour}
            />
          ))}
        </View>
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
