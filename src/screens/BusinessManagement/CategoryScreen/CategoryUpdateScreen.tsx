import {Alert, ButtonComponent, InputForm, ViewModal} from '@components';
import {updateCategory} from '@repositories';
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
    <ViewModal pressableProps={{onPress: () => navigation.goBack()}}>
      <InputForm
        inputProps={[
          {
            placeholder: 'Nome da categoria',
            value: category.name,
            onChangeText: text => handleState('name', text),
          },
        ]}>
        <ButtonComponent
          type="save"
          message="Salvar"
          onPress={askAboutUpdate}
        />
      </InputForm>
    </ViewModal>
  );
}
