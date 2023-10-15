import {
  Button,
  DecisionAlert,
  InputForm,
  SwitchForm,
  TextComponent,
  ViewModal,
} from '@components';
import {updateProfile} from '@repositories';
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
    DecisionAlert({
      message: 'Deseja salvar as alterações?',
      onPress: sendToUpdate,
    });
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
            value: cpfMask(profile.cpf),
            onChangeText: text => handleProfileState('cpf', text),
            keyboardType: 'numeric',
            maxLength: 14,
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
        <Button type="send" onPress={askAboutUpdate}>
          <TextComponent color="white" size="L">
            Salvar
          </TextComponent>
        </Button>
      </InputForm>
    </ViewModal>
  );
}
