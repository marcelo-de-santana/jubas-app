import {
  BlueButton,
  DecisionAlert,
  FormModal,
  Screen,
  SwitchButtons,
} from '@components';
import {EmployeeProfileScreenProps} from '@routes';
import {text} from '@styles';
import {cpfMask} from '@utils';
import {useState} from 'react';

export function EmployeeProfileScreen({
  navigation,
  route,
}: EmployeeProfileScreenProps) {
  const [profile, setProfile] = useState({...route.params.profile});

  function handleProfileState(key: string, value: string | boolean) {
    setProfile(prev => ({...prev, [key]: value}));
  }

  function confirmSend() {
    DecisionAlert({message: 'Deseja salvar as alterações?', onPress: sendForm});
    async function sendForm() {}
    navigation.popToTop();
  }

  return (
    <FormModal
      onPressToClose={() => navigation.goBack()}
      inputProps={[
        {
          placeholder: 'Nome',
          value: profile.name,
          onChangeText: text => handleProfileState('name', text),
        },
        {
          placeholder: 'CPF',
          value: cpfMask(String(profile.cpf)),
          onChangeText: text => handleProfileState('cpf', text),
          keyboardType: 'numeric',
          maxLength: 14
        },
      ]}>
      <SwitchButtons
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
      <BlueButton title="Salvar" onPress={confirmSend} />
    </FormModal>
  );
}
