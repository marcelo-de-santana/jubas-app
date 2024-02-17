import {
  Alert,
  Screen,
  StatusScreen,
  FormTextInputName,
  FormTextInputCpf,
  CheckBoxIcon,
  DeleteAndSaveButtonGroup,
} from '@components';
import {useProfileRemove, useProfileUpdate} from '@domain';
import {useForm} from '@hooks';
import {UserStackProps} from '@routes';
import {AlertStatusType} from '@styles';
import {mask, schemas, useNavigation} from '@utils';

export function UserProfileUpdateScreen({
  route,
}: Readonly<UserStackProps<'UserProfileUpdateScreen'>>) {
  const {profile} = route.params;
  const {navigateBack} = useNavigation();

  //DOMAIN ACCESS
  const updateProfile = useProfileUpdate();
  const removeProfile = useProfileRemove();

  const $customStatus: AlertStatusType = {
    204: {
      type: 'success',
      message: 'Perfil excluído com sucesso.',
    },
  };

  const formik = useForm({
    validationSchema: schemas.profileUpdate,
    initialValues: {
      profileId: profile.id,
      name: profile.name,
      cpf: mask.cpf(profile.cpf),
      statusProfile: profile.statusProfile,
    },
    onSubmit: () => {
      updateProfile.update({
        id: formik.values.profileId,
        name: formik.values.name,
        cpf: mask.removeCpf(formik.values.cpf),
        statusProfile: formik.values.statusProfile,
      });
    },
  });

  //ACTIONS OF DELETE BUTTON
  const sendToDelete = () => {
    removeProfile.remove({profileId: profile.id});
  };

  function askAboutDeletion() {
    Alert({
      type: 'decision',
      message: 'Deseja excluir o perfil?',
      onPress: sendToDelete,
    });
  }

  return (
    <Screen>
      <StatusScreen
        status={updateProfile.status}
        successAction={navigateBack}
      />
      <StatusScreen
        customStatus={$customStatus}
        status={removeProfile.status}
        successAction={navigateBack}
      />
      <FormTextInputName formik={formik} label="Nome" name="name" />
      <FormTextInputCpf
        formik={formik}
        label="CPF"
        name="cpf"
        keyboardType="numeric"
      />

      <CheckBoxIcon
        label="Estado do perfil"
        value={formik.values.statusProfile}
        onPress={() => formik.handleChangeBoolean('statusProfile')}
      />

      <DeleteAndSaveButtonGroup
        loading={updateProfile.isLoading || removeProfile.isLoading}
        deleteButtonPress={askAboutDeletion}
        saveButtonPress={formik.handleSubmit}
      />
    </Screen>
  );
}
