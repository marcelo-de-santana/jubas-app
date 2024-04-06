import {
  FormTextInputCpf,
  FormTextInputName,
  ModalStatus,
  Screen,
} from '@components';
import {useProfileUpdate} from '@domain';
import {useForm} from '@hooks';
import {UserStackProps} from '@routes';
import {mask, schemas} from '@utils';

export function UserProfileUpdateScreen({
  navigation,
  route,
}: UserStackProps<'UserProfileUpdateScreen'>) {
  const {profile} = route.params;

  //DOMAIN ACCESS
  const {mutate} = useProfileUpdate();
  // const removeProfile = useProfileRemove();

  // const $customStatus: AlertStatusType = {
  //   204: {
  //     type: 'success',
  //     message: 'Perfil excluído com sucesso.',
  //   },
  // };

  const formik = useForm({
    validationSchema: schemas.profileUpdate,
    initialValues: {
      profileId: profile.id,
      name: profile.name,
      cpf: mask.cpf(profile.cpf),
      statusProfile: profile.statusProfile,
    },
    onSubmit: values => {
      mutate({
        id: values.profileId,
        name: values.name,
        cpf: mask.removeCpf(values.cpf),
        statusProfile: values.statusProfile,
      });
    },
  });

  return (
    <Screen flex={1}>
      <ModalStatus
        // status={updateProfile.status}
        successAction={navigation.goBack}
      />

      <FormTextInputName formik={formik} label="Nome" name="name" />
      <FormTextInputCpf
        formik={formik}
        label="CPF"
        name="cpf"
        keyboardType="numeric"
      />

      {/* <CheckBoxIcon
        label="Estado do perfil"
        value={formik.values.statusProfile}
        onPress={() => formik.handleChangeBoolean('statusProfile')}
      /> */}

      {/* <DeleteAndSaveButtonGroup
        loading={updateProfile.isLoading || removeProfile.isLoading}
        deleteButtonPress={askAboutDeletion}
        saveButtonPress={formik.handleSubmit}
      /> */}
    </Screen>
  );
}
