import {
  Button,
  Alert,
  Modal,
  InputForm,
  SwitchForm,
  Text,
  ButtonComponent,
  TextInput,
  Screen,
} from '@components';
import {deleteProfile, updateProfileAndUser} from '@domain';
import {UserProfileUpdateScreenProps} from '@routes';
import {themeRegistry} from '@styles';
import {cpfMask, removeCpfMask} from '@utils';
import {useState} from 'react';
import {View} from 'react-native';

export function UserProfileUpdateScreen({
  navigation,
  route,
}: UserProfileUpdateScreenProps) {
  const {params} = route;
  const [profile, setProfile] = useState(params.profile);

  function handleProfile(key: string, value: string | number | boolean) {
    setProfile(prev => ({...prev, [key]: value}));
  }

  async function sendToUpdate() {
    const {id, cpf, name, statusProfile} = {
      ...profile,
      cpf: removeCpfMask(profile.cpf),
    };
    await updateProfileAndUser({
      profileId: id,
      name,
      cpf,
      statusProfile,
      userId: params.userId,
    });
    navigation.goBack();
  }

  async function sendToDelete() {
    await deleteProfile(profile.id);
    navigation.goBack();
  }

  /** Alert Components */
  function askAboutUpdate() {
    Alert({
      type: 'decision',
      message: 'Deseja salvar as alterações?',
      onPress: sendToUpdate,
    });
  }

  function askAboutDeletion() {
    Alert({
      type: 'decision',
      message: 'Deseja excluir o perfil?',
      onPress: sendToDelete,
    });
  }

  return (
    <Screen color="black-transparent">
      <Modal onPress={() => navigation.goBack()}>
        <TextInput
          placeholder="Nome"
          value={profile.name}
          onChangeText={text => handleProfile('name', text)}
        />
        <TextInput
          placeholder="CPF"
          maxLength={14}
          value={cpfMask(profile.cpf)}
          onChangeText={text => handleProfile('cpf', text)}
        />
        <View style={{marginVertical: 10}}>
          <SwitchForm
            title="Status"
            value={profile.statusProfile}
            onValueChange={() =>
              handleProfile('statusProfile', !profile.statusProfile)
            }
          />
        </View>
        <View style={themeRegistry['box-flex-row']}>
          <ButtonComponent
            type="save-flex"
            text="Salvar"
            onPress={askAboutUpdate}
          />
          <ButtonComponent type="trash" onPress={askAboutDeletion} />
        </View>
      </Modal>
    </Screen>
  );
}
