import {
  Screen,
  FormTextInputCpf,
  ModalStatus,
  FormTextInputName,
  Button,
  IconCheckBox,
} from '@components';
import {profileUseCases} from '@domain';
import {useForm} from '@hooks';
import {EmployeeScreenProps} from '@routes';
import {mask, schemas} from '@utils';

export function EmployeeProfileUpdateScreen({
  navigation,
  route,
}: Readonly<EmployeeScreenProps<'EmployeeProfileUpdateScreen'>>) {
  const {profile} = route.params;

  const {fetch, isLoading, status} = profileUseCases.update();

  const formik = useForm({
    validationSchema: schemas.profileUpdate,
    initialValues: {
      profileId: profile.id,
      name: profile.name,
      cpf: mask.cpf(profile.cpf),
      statusProfile: profile.statusProfile,
    },
    onSubmit: () =>
      fetch({
        id: formik.values.profileId,
        cpf: mask.removeCpf(formik.values.cpf),
        name: formik.values.name,
        statusProfile: formik.values.statusProfile,
      }),
  });

  return (
    <Screen>
      <ModalStatus status={status} successAction={navigation.goBack} />
      <FormTextInputName formik={formik} label="Nome" name="name" />
      <FormTextInputCpf
        formik={formik}
        label="CPF"
        name="cpf"
        keyboardType="numeric"
      />

      <IconCheckBox
        label="Estado do perfil"
        value={formik.values.statusProfile}
        onPress={() => formik.handleChangeBoolean('statusProfile')}
      />

      <Button
        type="inline"
        loading={isLoading}
        backgroundColor="steelBlue"
        style={{marginTop: 20}}
        title="Salvar"
        textProps={{color: 'white', variant: 'paragraphLarge'}}
        onPress={formik.handleSubmit}
      />
    </Screen>
  );
}
