import {
  Button,
  DecisionAlert,
  ViewModal,
  InputForm,
  SwitchForm,
  TextComponent,
} from '@components';
import {updateUser} from '@repositories';
import {UserUpdateScreenProps} from '@routes';
import {themeRegistry} from '@styles';
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

  async function sendToUpdate() {
    const {id, email, password, userPermission} = user;
    await updateUser({
      userId: id,
      email,
      password,
      userPermissionId: userPermission.id,
    });
    navigation.popToTop();
  }

  function askAboutUpdate() {
    DecisionAlert({onPress: sendToUpdate});
  }

  return (
    <ViewModal pressableProps={{onPress: () => navigation.goBack()}}>
      <InputForm
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
        <Button onPress={askAboutUpdate}>
          <TextComponent color="white" size="L">
            Salvar
          </TextComponent>
        </Button>
      </InputForm>
    </ViewModal>
  );
}
