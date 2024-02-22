import {
  Button,
  FormTextInput,
  Screen,
  ModalStatus,
  AlertStatusType,
} from '@components';
import {ScrollView, View} from 'react-native';
import {AuthStackProps} from '@routes';
import {useAuthContext} from '@contexts';
import {schemas} from '@utils';
import {HeaderBox} from './components/HeaderBox';
import {FooterBox} from './components/FooterBox';
import {useForm} from '@hooks';

export function SignInScreen({navigation}: Readonly<AuthStackProps>) {
  const $customStatus: AlertStatusType = {
    401: ['DANGER', 'Usuário e/ou senha incorreto(s).'],
    404: ['DANGER', 'Você não possui cadastrado.'],
  };
  const {signIn, isLoading, status} = useAuthContext();

  const formik = useForm({
    validationSchema: schemas.signIn,
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => signIn(values.email, values.password),
  });

  return (
    <Screen>
      <ModalStatus status={status} customStatus={$customStatus} />
      <ScrollView>
        <HeaderBox />
        <View style={{marginVertical: 20}}>
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
          <Button
            type="inline"
            loading={isLoading}
            backgroundColor="steelBlue"
            style={{marginTop: 20}}
            title="Entrar"
            textProps={{color: 'white', size: 'L'}}
            onPress={formik.handleSubmit}
          />
        </View>

        <FooterBox
          navigateToSignUp={() => navigation.navigate('SignUpScreen')}
          navigateToRecoveryPassword={() =>
            navigation.navigate('RecoveryPasswordScreen')
          }
        />
      </ScrollView>
    </Screen>
  );
}
