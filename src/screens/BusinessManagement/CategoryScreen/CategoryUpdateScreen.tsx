import {Alert, ButtonComponent, Modal, Screen, TextInput} from '@components';
import {updateCategory} from '@domain';
import {CategoryUpdateScreenProps} from '@routes';
import {useState} from 'react';

export function CategoryUpdateScreen({
  navigation,
  route,
}: CategoryUpdateScreenProps) {
  const [category, setCategory] = useState(route.params.category);

  function handleState(key: string, value: string) {
    setCategory(prev => ({...prev, [key]: value}));
  }

  async function sendToUpdate() {
    await updateCategory(category);
    navigation.goBack();
  }

  function askAboutUpdate() {
    Alert({
      type: 'decision',
      message: 'Deseja prosseguir com a alteração da categoria?',
      onPress: sendToUpdate,
    });
  }

  return (
    <Screen color="black-transparent">
      <Modal onPress={() => navigation.goBack()}>
        <TextInput
          placeholder="Nome da categoria"
          value={category.name}
          onChangeText={text => handleState('name', text)}
        />
        <ButtonComponent type="save" text="Salvar" onPress={askAboutUpdate} />
      </Modal>
    </Screen>
  );
}
