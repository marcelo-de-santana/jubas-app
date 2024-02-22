import {
  Button,
  FormTextInput,
  Screen,
  ModalStatus,
  IconBox,
  AlertStatusType,
} from '@components';
import {ScrollView} from 'react-native';
import {schemas} from '@utils';
import {useForm, useNavigation} from '@hooks';
import {userUseCases} from '@domain';

export function SignUpScreen() {
  const $customStatus: AlertStatusType = {
    201: ['SUCCESS', 'Usuário criado com sucesso.'],
    401: ['DANGER', 'Você já possui cadastrado.'],
  };

  const {fetch, isLoading, status} = userUseCases.create();
  const {goBack} = useNavigation();
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
      <ModalStatus
        status={status}
        customStatus={$customStatus}
        successAction={goBack}
        errorAction={goBack}
      />
      <ScrollView>
        <IconBox name="PersonIcon" />
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
          textProps={{variant: 'paragraphLarge', color: 'white'}}
          onPress={formik.handleSubmit}
        />
      </ScrollView>
    </Screen>
  );
}
