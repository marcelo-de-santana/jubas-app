import {
  Button,
  CheckBoxIcon,
  FormTextInputCpf,
  FormTextInputName,
  Screen,
  StatusScreen,
} from '@components';
import {useProfileCreate} from '@domain';
import {useForm} from '@hooks';
import {UserStackProps} from '@routes';
import {mask, schemas, useNavigation} from '@utils';
import {View} from 'react-native';

export function UserProfileCreateScreen({
  route,
}: UserStackProps<'UserProfileCreateScreen'>) {
  const {navigateBack} = useNavigation();
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

      <View style={{marginTop: 20}}>
        <Button
          type="inline"
          loading={isLoading}
          backgroundColor="steelBlue"
          title="Salvar"
          textProps={{color: 'white', size: 'L'}}
          onPress={formik.handleSubmit}
        />
      </View>
    </Screen>
  );
}
