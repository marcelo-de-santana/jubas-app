import {
  DecisionAlert,
  ButtonOpacity,
  TextComponent,
  SwitchForm,
  ViewModal,
  InputForm,
} from '@components';
import {useState} from 'react';
import {themeRegistry} from '@styles';
import {createUser} from '@repositories';
import {UserScreenProps} from '@routes';

export function UserCreateScreen({navigation}: UserScreenProps) {
  const [user, setUser] = useState({
    email: '',
    password: '',
    userPermission: {
      id: 3,
    },
  });

  function handleUserState(key: string, value: string) {
    setUser(prev => ({...prev, [key]: value}));
  }

  function handleUserPermissionIdState(value: number) {
    setUser(prev => ({
      ...prev,
      userPermission: {...prev.userPermission, id: value},
    }));
  }

  function confirmSend() {
    DecisionAlert({onPress: sendForm});
    async function sendForm() {
      await createUser(user);
      navigation.goBack();
    }
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
                onValueChange: () => handleUserPermissionIdState(1),
                value: user.userPermission.id === 1,
              },
            },
            {
              title: 'BARBEIRO',
              switchProps: {
                onValueChange: () => handleUserPermissionIdState(2),
                value: user.userPermission.id === 2,
              },
            },
            {
              title: 'CLIENTE',
              switchProps: {
                onValueChange: () => handleUserPermissionIdState(3),
                value: user.userPermission.id === 3,
              },
            },
          ]}
        />
        <ButtonOpacity onPress={confirmSend}>
          <TextComponent size="L" color="white">
            Confirmar
          </TextComponent>
        </ButtonOpacity>
      </InputForm>
    </ViewModal>
  );
}
