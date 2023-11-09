import {
  ButtonComponent,
  FormTextInput,
  Screen,
  StatusScreen,
} from '@components';
import {Keyboard, Pressable, ScrollView, View} from 'react-native';
import {AuthStackProps} from '@routes';
import {useAuthContext} from '@contexts';
import {schemas} from '@utils';
import {HeaderBox} from './components/HeaderBox';
import {FooterBox} from './components/FooterBox';
import {useDimensions, useForm} from '@hooks';
import {AlertStatusType} from '@styles';

export function SignInScreen({navigation}: AuthStackProps) {
  const {height} = useDimensions();
  const $customStatus: AlertStatusType = {
    401: {type: 'danger', message: 'Usuário e/ou senha incorreto(s).'},
    404: {type: 'danger', message: 'Você não possui cadastrado.'},
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

  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigateToRecoveryPasswordScreen() {
    navigation.navigate('RecoveryPasswordScreen');
  }

  return (
    <Screen>
      <StatusScreen
        loading={isLoading}
        status={status}
        customStatus={$customStatus}
      />
      <ScrollView>
        <Pressable onPress={Keyboard.dismiss}>
          <HeaderBox height={height} />
          <View style={{paddingVertical: 10}}>
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
              label="Digite seu senha"
              placeholder="**********"
              maxLength={20}
              secureTextEntry
            />

            <ButtonComponent
              type="save"
              text="Entrar"
              onPress={formik.handleSubmit}
            />
          </View>
          <FooterBox
            height={height}
            navigateToSignUpScreen={navigateToSignUpScreen}
            navigateToRecoveryPasswordScreen={navigateToRecoveryPasswordScreen}
          />
        </Pressable>
      </ScrollView>
    </Screen>
  );
}
