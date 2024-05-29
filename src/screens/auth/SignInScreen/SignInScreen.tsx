import {
  FormTextInput,
  Screen,
  ModalStatus,
  AlertMessageType,
  ButtonSuccess,
  Box,
} from '@components';
import {AuthStackProps} from '@routes';
import {schemas} from '@utils';
import {HeaderBox} from './components/HeaderBox';
import {FooterBox} from './components/FooterBox';
import {useForm} from '@hooks';
import {useAuthSignIn} from '@domain';

export function SignInScreen({
  navigation,
}: Readonly<AuthStackProps<'SignInScreen'>>) {
  const {signIn, isPending, isError} = useAuthSignIn();

  const formik = useForm({
    validationSchema: schemas.signIn,
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: ({email, password}) => signIn({email, password}),
  });

  return (
    <Screen scrollable>
      <ModalStatus isError={isError} customMessage={$customStatus} />
      <HeaderBox />
      <Box marginVertical="s20">
        <FormTextInput
          formik={formik}
          name="email"
          label="Digite seu e-mail"
          keyboardType="email-address"
          placeholder={'joao@exemplo.com'}
          maxLength={50}
        />

        <FormTextInput
          formik={formik}
          name="password"
          label="Digite sua senha"
          placeholder="**********"
          maxLength={20}
          secureTextEntry
        />
        <ButtonSuccess
          loading={isPending}
          backgroundColor="primaryContrast"
          marginVertical="s20"
          title="Entrar"
          textProps={{variant: 'paragraphLarge', color: 'primary'}}
          onPress={formik.handleSubmit}
        />
      </Box>

      <FooterBox
        navigateToSignUp={() => navigation.navigate('SignUpScreen')}
        navigateToRecoveryPassword={() =>
          navigation.navigate('RecoveryPasswordScreen')
        }
      />
    </Screen>
  );
}

const $customStatus: AlertMessageType = {
  error: 'Usuário e/ou senha incorreto(s).',
};
