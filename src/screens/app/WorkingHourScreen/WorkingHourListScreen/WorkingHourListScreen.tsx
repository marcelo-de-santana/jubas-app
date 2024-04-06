import {
  FlatList,
  Screen,
  BoxFourTimes,
  BoxHeaderWorkingHour,
} from '@components';
import {WorkingHourResponse, workingHourUseCases} from '@domain';
import {WorkingHourStackProps} from '@routes';
import {useEffect} from 'react';
import {ListRenderItemInfo} from 'react-native';

export function WorkingHourListScreen({
  navigation,
}: Readonly<WorkingHourStackProps<'WorkingHourListScreen'>>) {
  const {data, fetch, isLoading, isError} = workingHourUseCases.getAll();

  useEffect(() => {
    navigation.addListener('focus', () => {
      fetch();
    });
  }, [navigation]);

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
        renderItem={renderItem}
        ListHeaderComponent={data && BoxHeaderWorkingHour}
        listEmptyTitle="Nenhum horário cadastrado"
      />
    </Screen>
  );
}
