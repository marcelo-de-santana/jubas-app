import {
  Button,
  DecisionAlert,
  ViewModal,
  InputForm,
  SwitchForm,
  TextComponent,
} from '@components';
import {createProfile} from '@repositories';
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
    DecisionAlert({onPress: sendToCreate});
  }

  return (
    <ViewModal pressableProps={{onPress: () => navigation.goBack()}}>
      <InputForm
        inputProps={[
          {
            placeholder: 'Nome',
            value: profile.name,
            onChangeText: text => handleProfileState('name', text),
          },
          {
            placeholder: 'CPF',
            maxLength: 14,
            value: cpfMask(profile.cpf),
            onChangeText: text => handleProfileState('cpf', text),
          },
        ]}>
        <SwitchForm
          switchOptions={[
            {
              title: 'Status',
              switchProps: {
                value: profile.statusProfile,
                onChange: () =>
                  handleProfileState('statusProfile', !profile.statusProfile),
              },
            },
          ]}
        />
        <Button onPress={askAboutCreate}>
          <TextComponent color="white" size="L">
            Salvar
          </TextComponent>
        </Button>
      </InputForm>
    </ViewModal>
  );
}
