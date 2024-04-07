import {
  FlatList,
  Screen,
  BoxFourTimes,
  BoxHeaderWorkingHour,
  IconNavigation,
} from '@components';
import {WorkingHourResponse, useWorkingHourGetAll} from '@domain';
import {WorkingHourStackProps} from '@routes';
import {useLayoutEffect} from 'react';
import {ListRenderItemInfo} from 'react-native';

export function WorkingHourListScreen({
  navigation,
}: Readonly<WorkingHourStackProps<'WorkingHourListScreen'>>) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconNavigation routeName={'WorkingHourCreateScreen'} />
      ),
    });
  }, []);

  const {data, isLoading, isError, refetch} = useWorkingHourGetAll();

  function renderItem({item}: ListRenderItemInfo<WorkingHourResponse>) {
    const navigateToUpdate = () =>
      navigation.navigate('WorkingHourUpdateScreen', {workingHour: item});

    const listTime = [
      item.startTime,
      item.startInterval,
      item.endInterval,
      item.endTime,
    ];

    return (
      <BoxFourTimes
        height={50}
        textValues={listTime}
        onPress={navigateToUpdate}
      />
    );
  }

  return (
    <Screen flex={1}>
      <FlatList
        data={data}
        loading={isLoading}
        error={isError}
        refetch={refetch}
        renderItem={renderItem}
        ListHeaderComponent={data && BoxHeaderWorkingHour}
        listEmptyTitle="Nenhum horário cadastrado"
      />
    </Screen>
  );
}
