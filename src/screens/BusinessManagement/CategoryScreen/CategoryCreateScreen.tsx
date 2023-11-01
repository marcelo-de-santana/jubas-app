import {Alert, ButtonComponent, Modal, Screen, TextInput} from '@components';
import {createCategory} from '@domain';
import {BusinessManagementScreenProps} from '@routes';
import {useState} from 'react';

export function CategoryCreateScreen({
  navigation,
}: BusinessManagementScreenProps) {
  const [categoryName, setCategoryName] = useState('');

  async function sendToCreate() {
    await createCategory(categoryName);
    navigation.goBack();
  }

  function askAboutCreate() {
    Alert({
      type: 'decision',
      message: 'Deseja cadastrar uma nova categoria?',
      onPress: sendToCreate,
    });
  }

  return (
    <Screen color="black-transparent">
      <Modal onPress={() => navigation.goBack()}>
        <TextInput
          placeholder="Nome da categoria"
          value={categoryName}
          onChangeText={text => setCategoryName(text)}
        />
        <ButtonComponent type="save" text="Salvar" onPress={askAboutCreate} />
      </Modal>
    </Screen>
  );
}
