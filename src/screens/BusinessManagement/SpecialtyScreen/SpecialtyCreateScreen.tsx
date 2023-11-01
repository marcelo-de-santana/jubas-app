import {
  Alert,
  ButtonComponent,
  EmptyListComponent,
  LoadingIndicator,
  LoadingScreen,
  Modal,
  Screen,
  Text,
  TextInput,
  TouchableItem,
  ViewSeparator,
} from '@components';
import {
  CategoryResponseDTO,
  createSpecialty,
  getAllCategories,
} from '@domain';
import {BusinessManagementScreenProps} from '@routes';
import {ColorName} from '@styles';
import {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

export function SpecialtyCreateScreen({
  navigation,
}: BusinessManagementScreenProps) {
  const [isLoading, setLoading] = useState(false);
  const [category, setCategory] = useState([]);
  const [categoryOption, setCategoryOption] = useState(0);
  const [specialty, setSpecialty] = useState('');

  useEffect(() => {
    searchData();
  }, []);

  async function searchData() {
    setLoading(true);
    setCategory(await getAllCategories());
    setLoading(false);
  }

  async function sendToCreate() {
    await createSpecialty({
      categoryId: categoryOption,
      specialtyName: specialty,
    });
    navigation.goBack();
  }

  function ListHeaderComponent() {
    return <Text>Selecione uma categoria</Text>;
  }

  function renderItem({item}: {item: CategoryResponseDTO}) {
    let color: ColorName = 'light-gray';
    if (item.id === categoryOption) {
      color = 'lavender-gray';
    }
    return (
      <TouchableItem
        color={color}
        type="box-flex-row-list"
        onPress={() => setCategoryOption(item.id)}
        textValues={[item.name]}
      />
    );
  }

  function askAboutCreate() {
    Alert({
      type: 'decision',
      message: `Deseja criar a especialidade:${'\n'}- ${specialty}`,
      onPress: sendToCreate,
    });
  }

  function ListEmptyComponent() {
    return <EmptyListComponent title="Nenhuma categoria disponível." />;
  }

  return (
    <Screen color="black-transparent">
      <Modal onPress={() => navigation.goBack()}>
        {isLoading ? (
          <LoadingIndicator />
        ) : (
          <FlatList
            data={category}
            ListHeaderComponent={ListHeaderComponent}
            renderItem={renderItem}
            ItemSeparatorComponent={ViewSeparator}
            ListEmptyComponent={ListEmptyComponent}
          />
        )}
        {categoryOption !== 0 && (
          <>
            <TextInput
              placeholder="Nome da especialidade"
              value={specialty}
              onChangeText={text => setSpecialty(text)}
            />
            <ButtonComponent
              type="save"
              text="Salvar"
              onPress={askAboutCreate}
            />
          </>
        )}
      </Modal>
    </Screen>
  );
}