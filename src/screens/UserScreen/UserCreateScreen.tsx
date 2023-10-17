import {
  Alert,
  SwitchForm,
  ViewModal,
  InputForm,
  ButtonComponent,
} from '@components';
import {useState} from 'react';
import {themeRegistry} from '@styles';
import {createUser} from '@repositories';
import {UserScreenProps} from '@routes';

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
    <ViewModal pressableProps={{onPress: () => navigation.goBack()}}>
      <InputForm
        inputProps={[
          {
            value: user.email,
            onChangeText: text => handleUserState('email', text),
            placeholder: 'E-mail',
            maxLength: 50,
          },
          {
            value: user.password,
            onChangeText: text => handleUserState('password', text),
            placeholder: 'Senha',
            maxLength: 16,
            secureTextEntry: true,
          },
        ]}>
        <SwitchForm
          style={themeRegistry['box-flex-row']}
          switchOptions={[
            {
              title: 'ADMIN',
              switchProps: {
                onValueChange: () => handleUserState('userPermissionId', 1),
                value: user.userPermissionId === 1,
              },
            },
            {
              title: 'BARBEIRO',
              switchProps: {
                onValueChange: () => handleUserState('userPermissionId', 2),
                value: user.userPermissionId === 2,
              },
            },
            {
              title: 'CLIENTE',
              switchProps: {
                onValueChange: () => handleUserState('userPermissionId', 3),
                value: user.userPermissionId === 3,
              },
            },
          ]}
        />
        <ButtonComponent
          type="save"
          message="Salvar"
          onPress={askAboutCreate}
        />
      </InputForm>
    </ViewModal>
  );
}
