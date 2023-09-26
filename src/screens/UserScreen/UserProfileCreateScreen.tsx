import {
  ButtonOpacity,
  DecisionAlert,
  FormModal,
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

  function confirmSend() {
    DecisionAlert({onPress: sendForm});
    function sendForm() {
      const requestProfile = {
        ...profile,
        cpf: Number(removeCpfMask(profile.cpf)),
      };
      createProfile(requestProfile);
      navigation.goBack();
    }
  }

  return (
    <FormModal
      pressableProps={{onPress: () => navigation.goBack()}}
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
      <ButtonOpacity onPress={confirmSend}>
        <TextComponent color="white" size="L">
          Salvar
        </TextComponent>
      </ButtonOpacity>
    </FormModal>
  );
}
