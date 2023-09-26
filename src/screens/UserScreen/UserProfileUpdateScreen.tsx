import {
  ButtonOpacity,
  DecisionAlert,
  ViewModal,
  InputForm,
  Icon,
  SwitchForm,
  TextComponent,
} from '@components';
import {deleteProfile, updateUserAndProfile} from '@repositories';
import {UserProfileUpdateScreenProps} from '@routes';
import {theme} from '@styles';
import {cpfMask, removeCpfMask} from '@utils';
import {useState} from 'react';
import {View} from 'react-native';

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
    <ViewModal pressableProps={{onPress: () => navigation.goBack()}}>
      <InputForm
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
        <SwitchForm
          style={{paddingVertical: 10, paddingHorizontal: 5}}
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
          <ButtonOpacity type="send-flex" onPress={confirmSend}>
            <TextComponent color="white" size="L">
              Salvar
            </TextComponent>
          </ButtonOpacity>
          <ButtonOpacity type="small" color="red" onPress={confirmDeletion}>
            <Icon name="TrashIcon" color="white" size={30} />
          </ButtonOpacity>
        </View>
      </InputForm>
    </ViewModal>
  );
}
