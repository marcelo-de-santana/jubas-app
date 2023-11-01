import {
  Alert,
  Modal,
  InputForm,
  SwitchForm,
  ButtonComponent,
  Screen,
} from '@components';
import {updateUser} from '@domain';
import {UserUpdateScreenProps} from '@routes';
import {themeRegistry} from '@styles';
import {useState} from 'react';
import {View} from 'react-native';

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
    Alert({type: 'decision', onPress: sendToUpdate});
  }

  return (
    <Screen color="black-transparent">
      <Modal onPress={() => navigation.goBack()}>
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
          <View style={themeRegistry['box-flex-row']}>
            <SwitchForm
              title="ADMIN"
              value={user.userPermission.id === 1}
              onValueChange={() => handleUserPermissionState('id', 1)}
            />
            <SwitchForm
              title="BARBER"
              value={user.userPermission.id === 2}
              onValueChange={() => handleUserPermissionState('id', 2)}
            />
            <SwitchForm
              title="CLIENT"
              value={user.userPermission.id === 3}
              onValueChange={() => handleUserPermissionState('id', 3)}
            />
          </View>

          <ButtonComponent type="save" text="Salvar" onPress={askAboutUpdate} />
        </InputForm>
      </Modal>
    </Screen>
  );
}
