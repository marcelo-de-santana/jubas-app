import {Screen, TextAlertError} from '@components';
import {theme} from '@styles';
import {
  Alert,
  Image,
  Keyboard,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {AuthStackProps} from '@routes';
import {loginFormSchema} from '@utils';
import {useFormik} from 'formik';
import {useAuthContext} from '@contexts';

export function LoginScreen({navigation}: AuthStackProps) {
  const {signIn}: any = useAuthContext();
  const {handleChange, handleBlur, handleSubmit, values, errors, touched} =
    useFormik({
      validationSchema: loginFormSchema,
      initialValues: {
        email: '',
        password: '',
      },
      onSubmit: sendForm,
    });

  async function sendForm() {
    const response = await signIn({
      email: values.email,
      password: values.password,
    });
    {
      if (response === false) {
        Alert.alert('', 'Usuário e/ou Senha Incorreto(s)!');
      }
    }
  }

  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function RecoveryPasswordScreen() {
    navigation.navigate('RecoveryPasswordScreen');
  }

  return (
    <Screen>
      <Pressable style={theme.horizontalMargins} onPress={Keyboard.dismiss}>
        <View style={{alignItems: 'center', paddingVertical: '15%'}}>
          <Text style={theme.blackTextLarge}>Juba's Barbearia</Text>
          <Image
            style={theme.logo}
            source={require('../../assets/images/logoMarca.png')}
          />
        </View>
        <Text style={theme.label}>Digite seu email</Text>
        <TextInput
          style={theme.input}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="joao@exemplo.com"
          placeholderTextColor="#161C2660"
          maxLength={50}
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
        />
        {touched.email && errors.email && (
          <TextAlertError errorMessage={errors.email} />
        )}

        <Text style={theme.label}>Digite sua senha</Text>
        <TextInput
          style={theme.input}
          autoCapitalize="none"
          secureTextEntry={true}
          placeholder="**********"
          placeholderTextColor="#161C2660"
          maxLength={20}
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          value={values.password}
        />
        {touched.password && errors.password && (
          <TextAlertError errorMessage={errors.password} />
        )}

        <View style={{paddingTop: 15}}>
          <TouchableOpacity
            style={theme.blueButton}
            onPress={() => handleSubmit()}>
            <Text style={theme.textButton}>Entrar</Text>
          </TouchableOpacity>
        </View>
        <View style={theme.boxFooter}>
          <TouchableOpacity onPress={RecoveryPasswordScreen}>
            <Text style={theme.darkBlueTextSmallCenter}>
              Esqueci minha senha
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={theme.footerBottom}
            onPress={navigateToSignUpScreen}>
            <Text style={theme.darkBlueTextSmallCenter}>
              Não possui uma conta? Cadastre-se
            </Text>
          </TouchableOpacity>
        </View>
      </Pressable>
    </Screen>
  );
}
