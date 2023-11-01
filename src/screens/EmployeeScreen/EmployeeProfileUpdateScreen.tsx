import {
  Alert,
  SwitchForm,
  Modal,
  ButtonComponent,
  TextInput,
  Screen,
} from '@components';
import {updateProfile} from '@domain';
import {EmployeeProfileUpdateScreenProps} from '@routes';
import {cpfMask, removeCpfMask} from '@utils';
import {useState} from 'react';

export function EmployeeProfileUpdateScreen({
  navigation,
  route,
}: EmployeeProfileUpdateScreenProps) {
  const [profile, setProfile] = useState({...route.params.profile});

  function handleProfileState(key: string, value: string | boolean) {
    setProfile(prev => ({...prev, [key]: value}));
  }

  async function sendToUpdate() {
    const formattedProfile = {...profile, cpf: removeCpfMask(profile.cpf)};
    await updateProfile(formattedProfile);
    navigation.goBack();
  }

  function askAboutUpdate() {
    Alert({
      type: 'decision',
      message: 'Deseja salvar as alterações?',
      onPress: sendToUpdate,
    });
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
          value={cpfMask(profile.cpf)}
          onChangeText={text => handleProfileState('cpf', text)}
          keyboardType="numeric"
          maxLength={14}
        />

        <SwitchForm
          title="Status"
          value={profile.statusProfile}
          onValueChange={() =>
            handleProfileState('statusProfile', !profile.statusProfile)
          }
        />
        <ButtonComponent type="save" text="Salvar" onPress={askAboutUpdate} />
      </Modal>
    </Screen>
  );
}
