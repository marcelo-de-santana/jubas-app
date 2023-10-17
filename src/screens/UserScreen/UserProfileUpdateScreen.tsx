import {
  Button,
  Alert,
  ViewModal,
  InputForm,
  SwitchForm,
  Text,
  ButtonComponent,
} from '@components';
import {deleteProfile, updateProfileAndUser} from '@repositories';
import {UserProfileUpdateScreenProps} from '@routes';
import {theme} from '@styles';
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
    <ViewModal pressableProps={{onPress: () => navigation.goBack()}}>
      <InputForm
        inputProps={[
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
          <ButtonComponent type="save-flex" message='Salvar' onPress={askAboutUpdate} />
          <ButtonComponent type="trash" onPress={askAboutDeletion} />
        </View>
      </InputForm>
    </ViewModal>
  );
}
