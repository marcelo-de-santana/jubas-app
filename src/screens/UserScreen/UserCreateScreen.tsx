import {
  Alert,
  SwitchForm,
  Modal,
  InputForm,
  ButtonComponent,
  Screen,
  TextInput,
} from '@components';
import {useState} from 'react';
import {themeRegistry} from '@styles';
import {createUser} from '@domain';
import {UserScreenProps} from '@routes';
import {View} from 'react-native';

export function UserCreateScreen({navigation}: UserScreenProps) {
  const [user, setUser] = useState({
    email: '',
    password: '',
    userPermissionId: 3,
  });

  function handleUserState(key: string, value: string | number) {
    setUser(prev => ({...prev, [key]: value}));
  }

  async function sendToCreate() {
    await createUser(user);
    navigation.goBack();
  }

  function askAboutCreate() {
    Alert({type: 'decision', onPress: sendToCreate});
  }

  return (
    <Screen color="black-transparent">
      <Modal onPress={() => navigation.goBack()}>
        <TextInput
          value={user.email}
          onChangeText={text => handleUserState('email', text)}
          placeholder="E-mail"
          maxLength={50}
        />
        <TextInput
          value={user.password}
          onChangeText={text => handleUserState('password', text)}
          placeholder="Senha"
          maxLength={16}
          secureTextEntry={true}
        />
        <View style={themeRegistry['box-flex-row']}>
          <SwitchForm
            title="ADMIN"
            value={user.userPermissionId === 1}
            onValueChange={() => handleUserState('userPermissionId', 1)}
          />
          <SwitchForm
            title="BARBEIRO"
            value={user.userPermissionId === 2}
            onValueChange={() => handleUserState('userPermissionId', 2)}
          />
          <SwitchForm
            title="CLIENTE"
            value={user.userPermissionId === 3}
            onValueChange={() => handleUserState('userPermissionId', 3)}
          />
        </View>
        <ButtonComponent type="save" text="Salvar" onPress={askAboutCreate} />
      </Modal>
    </Screen>
  );
}
