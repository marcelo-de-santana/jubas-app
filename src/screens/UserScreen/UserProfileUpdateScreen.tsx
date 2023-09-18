import {BlueButton, DecisionAlert, FormModal, SwitchButtons} from '@components';
import {
  ProfileRequestDTO,
  updateProfile,
} from '@repositories';
import {UserProfileUpdateScreenProps} from '@routes';
import {theme} from '@styles';
import {cpfMask} from '@utils';
import {useState} from 'react';

export function UserProfileUpdateScreen({
  navigation,
  route,
}: UserProfileUpdateScreenProps) {
  const [profile, setProfile] = useState<ProfileRequestDTO>(
    route.params.profile,
  );

  function handleProfile(key: string, value: string | number | boolean) {
    setProfile(prev => ({...prev, [key]: value}));
  }

  function handleUserProfile(key: string, value: string) {
    setProfile(prev => ({...prev, user: {...prev.user, [key]: value}}));
  }

  function confirmSend() {
    DecisionAlert({
      message: 'Deseja salvar as alterações?',
      onPress: sendForm,
    });
    async function sendForm() {
      await updateProfile(profile);
      navigation.goBack();
    }
  }

  return (
    <FormModal
      onPressToClose={() => navigation.goBack()}
      inputProps={[
        {
          placeholder: 'E-mail',
          value: profile.user.email,
          onChangeText: text => handleUserProfile('email', text),
        },
        {
          placeholder: 'Nome',
          value: profile.name,
          onChangeText: text => handleProfile('name', text),
        },
        {
          placeholder: 'CPF',
          maxLength: 14,
          value: cpfMask(String(profile.cpf)),
          onChangeText: text => handleProfile('cpf', text),
        },
      ]}>
      <SwitchButtons
        style={theme.boxItems}
        switchOptions={[
          {
            title: 'Status',
            switchProps: {
              value: profile.statusProfile,
              onValueChange: () =>
                handleProfile('statusProfile', !profile.statusProfile),
            },
          },
        ]}
      />
      <BlueButton title="Salvar" onPress={confirmSend} />
    </FormModal>
  );
}
