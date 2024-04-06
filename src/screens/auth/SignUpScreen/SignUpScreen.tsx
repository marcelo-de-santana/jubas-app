import {
  FormTextInput,
  Screen,
  ModalStatus,
  IconBox,
  ButtonSuccess,
  AlertMessageType,
} from '@components';
import {ScrollView} from 'react-native';
import {schemas} from '@utils';
import {useForm} from '@hooks';
import {AuthStackProps} from '@routes';
import {useUserCreate} from '@domain';

export function SignUpScreen({
  navigation,
}: Readonly<AuthStackProps<'SignUpScreen'>>) {
  const {mutate, isError, isSuccess, isPending} = useUserCreate();

  const formik = useForm({
    validationSchema: schemas.signUp,
    initialValues: {
      email: '',
      password: '',
      checkPass: '',
    },
    onSubmit: values =>
      mutate({
        email: values.email,
        password: values.password,
      }),
  });

  return (
    <Screen>
      <ModalStatus
        customMessage={$customMessage}
        isError={isError}
        isSuccess={isSuccess}
        successAction={navigation.goBack}
        errorAction={navigation.goBack}
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
        <ButtonSuccess
          loading={isPending}
          backgroundColor="primaryContrast"
          marginTop="s20"
          title="Cadastrar"
          textProps={{variant: 'paragraphLarge', color: 'primary'}}
          onPress={formik.handleSubmit}
        />
      </ScrollView>
    </Screen>
  );
}

const $customMessage: AlertMessageType = {
  success: 'Usuário criado com sucesso.',
  error: 'Você já possui cadastrado.',
};
