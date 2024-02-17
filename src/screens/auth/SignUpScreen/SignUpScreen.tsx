import {
  Button,
  FormTextInput,
  Screen,
  StatusScreen,
  BoxIcon,
} from '@components';
import {ScrollView} from 'react-native';
import {schemas, useNavigation} from '@utils';
import {AlertStatusType} from '@styles';
import {useApi, useForm} from '@hooks';

export function SignUpScreen() {
  const $customStatus: AlertStatusType = {
    201: {type: 'success', message: 'Usuário criado com sucesso.'},
    401: {type: 'danger', message: 'Você já possui cadastrado.'},
  };

  const {fetch, isLoading, status} = useApi.user.create();
  const {navigateBack} = useNavigation();
  const formik = useForm({
    validationSchema: schemas.signUp,
    initialValues: {
      email: '',
      password: '',
      checkPass: '',
    },
    onSubmit: values =>
      fetch({
        email: values.email,
        password: values.password,
        permissionId: 3,
      }),
  });

  return (
    <Screen>
      <StatusScreen
        status={status}
        customStatus={$customStatus}
        successAction={navigateBack}
        errorAction={navigateBack}
      />
      <ScrollView>
        <BoxIcon name="PersonIcon" />
        <FormTextInput
          formik={formik}
          name="email"
          label="E-mail"
          keyboardType="email-address"
          placeholder="jubasdeleao@exemplo.com"
          maxLength={50}
        />
        <FormTextInput
          formik={formik}
          name="password"
          label="Senha"
          placeholder="********"
          maxLength={20}
          secureTextEntry
        />
        <FormTextInput
          formik={formik}
          name="checkPass"
          label="Confirmar senha"
          placeholder="********"
          maxLength={20}
          secureTextEntry
        />
        <Button
          type="inline"
          loading={isLoading}
          backgroundColor="steelBlue"
          style={{marginTop: 20}}
          title="Cadastrar"
          textProps={{color: 'white', size: 'L'}}
          onPress={formik.handleSubmit}
        />
      </ScrollView>
    </Screen>
  );
}
