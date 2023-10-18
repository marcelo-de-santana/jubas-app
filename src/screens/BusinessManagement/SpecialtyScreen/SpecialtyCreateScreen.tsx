import {
  Alert,
  ButtonComponent,
  EmptyListComponent,
  InputForm,
  LoadingScreen,
  Screen,
  Text,
  TouchableItem,
  ViewSeparator,
} from '@components';
import {
  CategoryResponseDTO,
  createSpecialty,
  getAllCategories,
} from '@repositories';
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

  if (isLoading) return <LoadingScreen />;

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
    <Screen>
      <FlatList
        data={category}
        ListHeaderComponent={ListHeaderComponent}
        renderItem={renderItem}
        ItemSeparatorComponent={ViewSeparator}
        ListEmptyComponent={ListEmptyComponent}
      />
      {categoryOption !== 0 && (
        <InputForm
          inputProps={[
            {
              placeholder: 'Nome da especialidade',
              value: specialty,
              onChangeText: text => setSpecialty(text),
            },
          ]}>
          <ButtonComponent
            type="save"
            message="Salvar"
            onPress={askAboutCreate}
          />
        </InputForm>
      )}
    </Screen>
  );
}
