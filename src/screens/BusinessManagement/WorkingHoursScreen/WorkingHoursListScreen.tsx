import {
  ButtonComponent,
  EmptyListComponent,
  LoadingScreen,
  Screen,
  Text,
  Touchable,
  ViewSeparator,
} from '@components';
import {WorkingHoursResponseDTO, getAllWorkingHours} from '@repositories';
import {BusinessManagementScreenProps} from '@routes';
import {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';

interface ListTimeProps {
  textValues: string[];
}

function ListTime({textValues}: ListTimeProps) {
  return (
    <Touchable type="box-flex-row-list" color="light-gray" disabled>
      {textValues?.map((item, index) => (
        <View key={index} style={{width: '20%', justifyContent: 'center'}}>
          <Text color="steel-blue" align="center" size="S">
            {item}
          </Text>
        </View>
      ))}
    </Touchable>
  );
}

export function WorkingHoursListScreen({
  navigation,
}: BusinessManagementScreenProps) {
  const [isLoading, setLoading] = useState(true);
  const [workingHours, setWorkingHours] = useState<WorkingHoursResponseDTO[]>(
    [],
  );

  useEffect(() => {
    navigation.addListener('focus', () => {
      searchData();
    });
  }, [navigation]);

  async function searchData() {
    setLoading(true);
    setWorkingHours(await getAllWorkingHours());
    setLoading(false);
  }

  function ListHeaderComponent() {
    return (
      <ListTime
        textValues={['Entrada', 'Início\nIntervalo', 'Fim\nIntervalo', 'Saída']}
      />
    );
  }

  function renderItem({item}: {item: WorkingHoursResponseDTO}) {
    return (
      <ListTime
        textValues={[
          item.startTime,
          item.startInterval,
          item.endInterval,
          item.endTime,
        ]}
      />
    );
  }

  function ListEmptyComponent() {
    return <EmptyListComponent title="Nenhum horário cadastrado" />;
  }

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Screen>
      <FlatList
        data={workingHours}
        ListHeaderComponent={ListHeaderComponent}
        ItemSeparatorComponent={ViewSeparator}
        renderItem={renderItem}
        ListEmptyComponent={ListEmptyComponent}
      />
      <ButtonComponent
        type="add"
        onPress={() => navigation.navigate('WorkingHoursCreateScreen')}
      />
    </Screen>
  );
}
