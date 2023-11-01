import {
  Alert,
  Modal,
  InputForm,
  SwitchForm,
  ButtonComponent,
  Screen,
  TextInput,
} from '@components';
import {createProfile} from '@domain';
import {UserProfileCreateScreenProps} from '@routes';
import {cpfMask, removeCpfMask} from '@utils';
import {useState} from 'react';

export function UserProfileCreateScreen({
  navigation,
  route,
}: UserProfileCreateScreenProps) {
  const [profile, setProfile] = useState({
    name: '',
    cpf: '',
    statusProfile: false,
    ...route.params,
  });

  function handleProfileState(key: string, value: string | boolean) {
    setProfile(prev => ({...prev, [key]: value}));
  }

  async function sendToCreate() {
    const requestProfile = {
      ...profile,
      cpf: removeCpfMask(profile.cpf),
    };
    await createProfile(requestProfile);
    navigation.goBack();
  }

  function askAboutCreate() {
    Alert({type: 'decision', onPress: sendToCreate});
  }

  return (
    <Screen color="black-transparent">
      <Modal onPress={() => navigation.goBack()}>
        <TextInput
          placeholder="Nome"
          value={profile.name}
          onChangeText={text => handleProfileState('name', text)}
        />
        <TextInput
          placeholder="CPF"
          maxLength={14}
          value={cpfMask(profile.cpf)}
          onChangeText={text => handleProfileState('cpf', text)}
        />
        <SwitchForm
          title="Status"
          value={profile.statusProfile}
          onValueChange={() =>
            handleProfileState('statusProfile', !profile.statusProfile)
          }
        />
        <ButtonComponent type="save" text="Salvar" onPress={askAboutCreate} />
      </Modal>
    </Screen>
  );
}
