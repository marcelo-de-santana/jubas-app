import {
  Modal,
  Screen,
  FormTextInputCpf,
  FormSwitch,
  StatusScreen,
  FormTextInputName,
  Button,
} from '@components';
import {useProfileUpdate} from '@domain';
import {useForm} from '@hooks';
import {EmployeeScreenProps} from '@routes';
import {schemas} from '@utils';

export function EmployeeProfileUpdateScreen({
  navigation,
  route,
}: EmployeeScreenProps<'EmployeeProfileUpdateScreen'>) {
  const {profile} = route.params;
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

  function handleSwitch() {
    formik.handleChangeBoolean('statusProfile');
  }

  function navigateToEmployeeDetailsScreen() {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  }

  return (
    <Screen color="black-transparent" onPress={navigateToEmployeeDetailsScreen}>
      <StatusScreen
        loading={isLoading}
        status={status}
        successAction={navigateToEmployeeDetailsScreen}
      />
      <Modal onPress={navigateToEmployeeDetailsScreen}>
        <FormTextInputName formik={formik} label="Nome" name="name" />
        <FormTextInputCpf
          formik={formik}
          label="CPF"
          name="cpf"
          keyboardType="numeric"
        />
        <FormSwitch
          switchProps={{
            label: 'Status',
            value: formik.values.statusProfile,
            onValueChange: handleSwitch,
          }}
        />
        <Button
          type="inline"
          backgroundColor="steel-blue"
          text="Salvar"
          textProps={{color: 'white', size: 'L'}}
          onPress={formik.handleSubmit}
        />
      </Modal>
    </Screen>
  );
}
