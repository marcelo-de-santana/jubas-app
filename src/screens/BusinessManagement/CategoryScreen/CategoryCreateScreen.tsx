import {Alert, ButtonComponent, InputForm, ViewModal} from '@components';
import {createCategory} from '@repositories';
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
    <ViewModal pressableProps={{onPress: () => navigation.goBack()}}>
      <InputForm
        inputProps={[
          {
            placeholder: 'Nome da categoria',
            value: categoryName,
            onChangeText: text => setCategoryName(text),
          },
        ]}>
        <ButtonComponent
          type="save"
          message="Salvar"
          onPress={askAboutCreate}
        />
      </InputForm>
    </ViewModal>
  );
}
