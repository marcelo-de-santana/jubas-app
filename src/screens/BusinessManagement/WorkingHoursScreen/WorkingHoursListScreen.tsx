import {BoxFourItems, Icon, EmptyList, Screen, Separator} from '@components';
import {WorkingHoursResponse, useWorkingHoursList} from '@domain';
import {BusinessManagementScreenProps} from '@routes';
import {flatListStyle} from '@styles';
import {useEffect} from 'react';
import {FlatList, View} from 'react-native';

export function WorkingHoursListScreen({
  navigation,
}: BusinessManagementScreenProps) {
  const {data, isLoading, isError, fetchData} = useWorkingHoursList();

  useEffect(() => {
    navigation.addListener('focus', () => {
      fetchData();
    });
  }, [navigation]);
  function navigateToWorkingHoursCreateScreen() {
    navigation.navigate('WorkingHoursCreateScreen');
  }
  const listHeader = [
    'Entrada',
    'Início\nIntervalo',
    'Fim\nIntervalo',
    'Saída',
  ];

  const Header = <BoxFourItems textValues={listHeader} />;
  const EmptyComponent = (
    <EmptyList
      loading={isLoading}
      error={isError}
      title="Nenhum horário cadastrado"
      refetch={fetchData}
    />
  );

  function renderItem({item}: {item: WorkingHoursResponse}) {
    const listTime = [
      item.startTime,
      item.startInterval,
      item.endInterval,
      item.endTime,
    ];

    return (
      <View style={{marginVertical: 10}}>
        <BoxFourItems
          style={{padding: 10}}
          textValues={listTime}
          disabled="box"
          onPress={() => {}}
        />
      </View>
    );
  }

  return (
    <Screen>
      <FlatList
        data={data}
        ListHeaderComponent={Header}
        ListEmptyComponent={EmptyComponent}
        ItemSeparatorComponent={Separator}
        renderItem={renderItem}
        contentContainerStyle={flatListStyle(data)}
      />
      <Icon
        name="AddIcon"
        type="floating"
        color="light-gray"
        backgroundColor="steel-blue"
        size={35}
        onPress={navigateToWorkingHoursCreateScreen}
      />
    </Screen>
  );
}
