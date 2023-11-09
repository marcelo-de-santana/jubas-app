import {Alert, BoxItem, EmptyList, Modal, Screen, Text, TextInput} from '@components';
import {useSpecialtyCreate} from '@domain';
import {BusinessManagementScreenProps} from '@routes';
import {ColorName} from '@styles';
import {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

export function SpecialtyCreateScreen({
  navigation,
}: BusinessManagementScreenProps) {
  const {data, create} = useSpecialtyCreate();
  const [categoryOption, setCategoryOption] = useState(0);

  function sendToCreate() {
    create({
      categoryId: categoryOption,
      specialtyName: data?.name,
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
      <BoxItem
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
