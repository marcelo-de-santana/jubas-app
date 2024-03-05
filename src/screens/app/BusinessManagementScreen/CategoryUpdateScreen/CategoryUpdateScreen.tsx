import {
  Box,
  ButtonDangerOutline,
  ButtonSuccess,
  Screen,
  TextInput,
} from '@components';
import {BusinessManagementStackProps} from '@routes';
import {useState} from 'react';

export function CategoryUpdateScreen({
  navigation,
  route,
}: Readonly<BusinessManagementStackProps<'CategoryUpdateScreen'>>) {
  const [category, setCategory] = useState(route.params.category);

  function handleState(key: string, value: string) {
    setCategory(prev => ({...prev, [key]: value}));
  }

  return (
    <Screen flex={1}>
      <TextInput
        placeholder="Nome da categoria"
        value={category.name}
        onChangeText={text => handleState('name', text)}
      />
      <Box flexDirection="row" marginTop="s32">
        <ButtonDangerOutline
          mr="s10"
          title="Voltar"
          onPress={navigation.goBack}
        />
        <ButtonSuccess
          ml="s10"
          title="Salvar"
          onPress={() => console.warn('Salvar')}
        />
      </Box>
    </Screen>
  );
}
