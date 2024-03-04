import {
  BoxFourItems,
  Icon,
  EmptyList,
  Screen,
  Separator,
} from '@components';
import {WorkingHoursResponse, useWorkingHoursList} from '@domain';
import {BusinessManagementStackProps} from '@routes';
import {flatListStyle} from '@styles';
import {useEffect} from 'react';
import {FlatList, View} from 'react-native';

export function WorkingHoursListScreen({
  navigation,
}: BusinessManagementStackProps<'WorkingHoursListScreen'>) {
  const {data, isLoading, isError, fetchData} = useWorkingHoursList();

  const navigateToWorkingHoursCreateScreen = () => {
    navigation.navigate('WorkingHoursCreateScreen');
  };

  useEffect(() => {
    navigation.addListener('focus', () => {
      fetchData();
    });
  }, [navigation]);

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
        color="white"
        backgroundColor="steelBlue"
        size={35}
        onPress={navigateToWorkingHoursCreateScreen}
      />
    </Screen>
  );
}
