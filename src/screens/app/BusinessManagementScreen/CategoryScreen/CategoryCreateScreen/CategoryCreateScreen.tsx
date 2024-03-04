import {
  Box,
  ButtonDangerOutline,
  ButtonSuccess,
  Screen,
  TextInput,
} from '@components';
import {BusinessManagementStackProps} from '@routes';
import {useState} from 'react';

export function CategoryCreateScreen({
  navigation,
}: Readonly<BusinessManagementStackProps<'CategoryCreateScreen'>>) {
  const [categoryName, setCategoryName] = useState('');

  return (
    <Screen>
      <TextInput
        placeholder="Nome da categoria"
        value={categoryName}
        onChangeText={text => setCategoryName(text)}
      />
      <Box flexDirection="row" marginTop="s32">
        <ButtonDangerOutline
          mr="s10"
          title="Voltar"
          onPress={navigation.goBack}
        />
        <ButtonSuccess ml="s10" title="Salvar" onPress={() => {}} />
      </Box>
    </Screen>
  );
}
