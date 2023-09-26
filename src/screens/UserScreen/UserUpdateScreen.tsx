import {
  ButtonOpacity,
  DecisionAlert,
  FormModal,
  SwitchForm,
  TextComponent,
} from '@components';
import {updateUser} from '@repositories';
import {UserUpdateScreenProps} from '@routes';
import {theme, themeRegistry} from '@styles';
import {useState} from 'react';

export function UserUpdateScreen({navigation, route}: UserUpdateScreenProps) {
  const [user, setUser] = useState({password: '', ...route.params.user});

  function handleUserState(key: string, value: string) {
    setUser(prev => ({...prev, [key]: value}));
  }

  function handleUserPermissionState(key: string, value: string | number) {
    setUser(prev => ({
      ...prev,
      userPermission: {...prev.userPermission, [key]: value},
    }));
  }

  function confirmSend() {
    DecisionAlert({onPress: sendForm});
    async function sendForm() {
      await updateUser(user);
      navigation.popToTop();
    }
  }

  return (
    <FormModal
      pressableProps={{onPress: () => navigation.goBack()}}
      inputProps={[
        {
          placeholder: 'E-mail',
          value: user.email,
          onChangeText: text => handleUserState('email', text),
        },
        {
          placeholder: 'Senha (Opcional)',
          value: user?.password,
          secureTextEntry: true,
          onChangeText: text => handleUserState('password', text),
        },
      ]}>
      <SwitchForm
        style={themeRegistry['box-flex-row']}
        switchOptions={[
          {
            title: 'ADMIN',
            switchProps: {
              value: user.userPermission.id === 1,
              onChange: () => handleUserPermissionState('id', 1),
            },
          },
          {
            title: 'BARBER',
            switchProps: {
              value: user.userPermission.id === 2,
              onChange: () => handleUserPermissionState('id', 2),
            },
          },
          {
            title: 'CLIENT',
            switchProps: {
              value: user.userPermission.id === 3,
              onChange: () => handleUserPermissionState('id', 3),
            },
          },
        ]}
      />
      <ButtonOpacity onPress={confirmSend}>
        <TextComponent color="white" size="L">
          Salvar
        </TextComponent>
      </ButtonOpacity>
    </FormModal>
  );
}
