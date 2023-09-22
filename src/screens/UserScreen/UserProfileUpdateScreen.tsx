import {
  ButtonIconOpacity,
  ButtonOpacity,
  DecisionAlert,
  FormModal,
  Icon,
  SwitchButtons,
} from '@components';
import {deleteProfile, updateUserAndProfile} from '@repositories';
import {UserProfileUpdateScreenProps} from '@routes';
import {text, theme} from '@styles';
import {cpfMask, removeCpfMask} from '@utils';
import {useState} from 'react';
import {Text, View} from 'react-native';

export function UserProfileUpdateScreen({
  navigation,
  route,
}: UserProfileUpdateScreenProps) {
  const [profile, setProfile] = useState(route.params.profile);

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
      const formattedProfile = {
        ...profile,
        cpf: removeCpfMask(profile.cpf),
      };
      await updateUserAndProfile(formattedProfile);
      navigation.goBack();
    }
  }

  function confirmDeletion() {
    DecisionAlert({
      message: 'Deseja excluir o perfil?',
      onPress: sendDeletion,
    });
    async function sendDeletion() {
      await deleteProfile(profile.id);
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
          value: cpfMask(profile.cpf),
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
      <View style={theme.boxFlexRow}>
        <ButtonOpacity onPress={confirmSend}>
          <Text style={text.whiteTextCenter18}>Salvar</Text>
        </ButtonOpacity>
        <ButtonIconOpacity onPress={confirmDeletion}>
          <Icon name="TrashIcon" color="#F2F2F2" size={30} />
        </ButtonIconOpacity>
      </View>
    </FormModal>
  );
}
