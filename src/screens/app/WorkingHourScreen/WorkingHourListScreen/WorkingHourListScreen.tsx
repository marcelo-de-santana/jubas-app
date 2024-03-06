import {
  Box,
  FlatList,
  Screen,
  BoxFourTimes,
  ButtonAdd,
  WorkingHourHeader,
} from '@components';
import {WorkingHourResponse, workingHourUseCases} from '@domain';
import {BusinessManagementStackProps} from '@routes';
import {useEffect} from 'react';
import {ListRenderItemInfo} from 'react-native';

export function WorkingHourListScreen({
  navigation,
}: Readonly<BusinessManagementStackProps<'WorkingHourListScreen'>>) {
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
      <Box height={50} justifyContent="center">
        <BoxFourTimes textValues={listTime} onLongPress={navigateToUpdate} />
      </Box>
    );
  }

  return (
    <Screen flex={1}>
      <FlatList
        data={data}
        loading={isLoading}
        error={isError}
        renderItem={renderItem}
        ListHeaderComponent={data && WorkingHourHeader}
        listEmptyTitle="Nenhum horário cadastrado"
        ListFooterComponent={
          data && (
            <ButtonAdd
              onPress={() => navigation.navigate('WorkingHourCreateScreen')}
            />
          )
        }
      />
    </Screen>
  );
}
