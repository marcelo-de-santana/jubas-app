import {
  ButtonComponent,
  Screen,
  Text,
  TextInput,
} from '@components';
import {colorRegistry} from '@styles';
import {
  Dimensions,
  Image,
  Keyboard,
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {AuthStackProps} from '@routes';
import {signInValidationSchema} from '@utils';
import {useFormik} from 'formik';
import {useAuthContext} from '@contexts';

const boxHeight = Dimensions.get('screen').height * 0.25;

export function SignInScreen({navigation}: AuthStackProps) {
  const {signIn} = useAuthContext();

  const {handleChange, handleBlur, handleSubmit, values, errors, touched} =
    useFormik({
      validationSchema: signInValidationSchema,
      initialValues: {
        email: '',
        password: '',
      },
      onSubmit: values => {
        signIn(values);
      },
    });

  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function RecoveryPasswordScreen() {
    navigation.navigate('RecoveryPasswordScreen');
  }

  function HeaderBox() {
    return (
      <View style={[styles['header-box']]}>
        <Text size="XL">Jubas Barbearia</Text>
        <Image
          resizeMode="stretch"
          source={require('../../assets/images/logo-marca.png')}
          style={[
            styles['brand-logo'],
            {backgroundColor: colorRegistry['lavender-gray']},
          ]}
        />
      </View>
    );
  }

  function FooterBox() {
    return (
      <View style={[styles['footer-box']]}>
        <TouchableOpacity onPress={RecoveryPasswordScreen}>
          <Text>Esqueci minha senha</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToSignUpScreen}>
          <Text>Não possui uma conta? Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <Screen>
      <ScrollView>
        <Pressable onPress={Keyboard.dismiss}>
          <HeaderBox />
          <View style={styles['form-box']}>
            <Text align="left">Digite seu e-mail</Text>
            <TextInput
              keyboardType={'email-address'}
              placeholder={'joao@exemplo.com'}
              maxLength={50}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            {touched.email && errors.email && (
              <Text align="justify" color="red" size="XS">
                {errors.email}
              </Text>
            )}
            <Text align="left">Digite seu senha</Text>
            <TextInput
              secureTextEntry={true}
              placeholder="**********"
              maxLength={20}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            {touched.password && errors.password && (
              <Text align="justify" color="red" size="XS">
                {errors.password}
              </Text>
            )}

            <ButtonComponent
              type="save"
              message="Entrar"
              onPress={() => handleSubmit()}
            />
          </View>
          <FooterBox />
        </Pressable>
      </ScrollView>
    </Screen>
  );
}
const styles = StyleSheet.create({
  'header-box': {
    height: boxHeight,
    marginVertical: 20,
  },
  'brand-logo': {
    alignSelf: 'center',
    borderRadius: 20,
    height: 150,
    margin: 20,
    width: 120,
  },
  'form-box': {
    height: boxHeight,
  },
  'footer-box': {
    flexDirection: 'column',
    height: boxHeight,
    justifyContent: 'space-between',
    marginVertical: 20,
  },
});
