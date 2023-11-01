import {
  ButtonComponent,
  EmptyListComponent,
  LoadingScreen,
  Screen,
  TouchableItem,
} from '@components';
import {SpecialtyResponseDTO, getAllSpecialties} from '@domain';
import {BusinessManagementScreenProps} from '@routes';
import {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

export function SpecialtyListScreen({
  navigation,
}: BusinessManagementScreenProps) {
  const [isLoading, setLoading] = useState(false);
  const [specialty, setSpecialty] = useState([]);

  useEffect(() => {
    searchData();
  }, []);

  async function searchData() {
    setLoading(true);
    setSpecialty(await getAllSpecialties());
    setLoading(false);
  }

  if (isLoading) return <LoadingScreen />;

  function renderItem({item}: {item: SpecialtyResponseDTO}) {
    return <TouchableItem textValues={['teste de valores']} />;
  }

  function ListEmptyComponent() {
    return <EmptyListComponent title="Lista vazia." />;
  }

  return (
    <Screen>
      <FlatList
        data={specialty}
        renderItem={renderItem}
        ListEmptyComponent={ListEmptyComponent}
      />
      <ButtonComponent
        type="add"
        onPress={() => navigation.navigate('SpecialtyCreateScreen')}
      />
    </Screen>
  );
}
