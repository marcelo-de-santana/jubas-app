import {
  Screen,
  FormTextInputCpf,
  StatusScreen,
  FormTextInputName,
  Button,
  CheckBoxIcon,
} from '@components';
import {useProfileUpdate} from '@domain';
import {useForm} from '@hooks';
import {EmployeeScreenProps} from '@routes';
import {schemas, useNavigation} from '@utils';

export function EmployeeProfileUpdateScreen({
  navigation,
  route,
}: EmployeeScreenProps<'EmployeeProfileUpdateScreen'>) {
  const {profile} = route.params;
  const {navigateBack} = useNavigation();
  const initalValues = profile?.id
    ? {...profile}
    : {id: '', name: '', cpf: '', statusProfile: false};
  const {update, isLoading, status} = useProfileUpdate();

  const formik = useForm({
    validationSchema: schemas.profile,
    initialValues: initalValues,
    onSubmit: () =>
      update({
        id: formik.values.id,
        cpf: formik.values.cpf,
        name: formik.values.name,
        statusProfile: formik.values.statusProfile,
      }),
  });

  return (
    <Screen>
      <StatusScreen status={status} successAction={navigateBack} />
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

      <Button
        type="inline"
        loading={isLoading}
        backgroundColor="steelBlue"
        style={{marginTop: 20}}
        title="Salvar"
        textProps={{color: 'white', size: 'L'}}
        onPress={formik.handleSubmit}
      />
    </Screen>
  );
}
