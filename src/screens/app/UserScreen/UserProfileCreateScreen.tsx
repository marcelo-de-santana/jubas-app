import {
  Button,
  CheckBoxIcon,
  FormTextInputCpf,
  FormTextInputName,
  Screen,
  ModalStatus,
} from '@components';
import {useProfileCreate} from '@domain';
import {useForm} from '@hooks';
import {UserStackProps} from '@routes';
import {mask, schemas} from '@utils';
import {View} from 'react-native';

export function UserProfileCreateScreen({
  route,
}: Readonly<UserStackProps<'UserProfileCreateScreen'>>) {
  const {fetchData, isLoading, status} = useProfileCreate();

  const formik = useForm({
    validationSchema: schemas.profileCreate,
    initialValues: {
      name: '',
      cpf: '',
      statusProfile: false,
      userId: route.params.userId,
    },
    onSubmit: () => {
      fetchData({
        name: formik.values.name,
        cpf: mask.removeCpf(formik.values.cpf),
        statusProfile: formik.values.statusProfile,
        userId: formik.values.userId,
      });
    },
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

      <CheckBoxIcon
        label="Estado do perfil"
        value={formik.values.statusProfile}
        onPress={() => formik.handleChangeBoolean('statusProfile')}
      />

      <View style={{marginTop: 20}}>
        <Button
          type="inline"
          loading={isLoading}
          backgroundColor="steelBlue"
          title="Salvar"
          textProps={{color: 'white', variant: 'paragraphLarge'}}
          onPress={formik.handleSubmit}
        />
      </View>
    </Screen>
  );
}
