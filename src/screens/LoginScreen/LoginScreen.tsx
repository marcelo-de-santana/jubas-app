import {Screen} from '@components';
import {theme} from '@styles';
import {
  Keyboard,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Header} from './components/Header';
import {PropsNativeStack} from '@routes';
import {authUserRepo} from '@repositories';

export function LoginScreen({navigation}: PropsNativeStack) {
  function handleSubmit(){
    const user = {email: 'admin@jubas.com', password: '12345678'};
    authUserRepo(user);
  }

  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function RecoveryPasswordScreen() {
    navigation.navigate('RecoveryPasswordScreen');
  }

  return (
    <Screen>
      <ScrollView>
        <Pressable onPress={Keyboard.dismiss} style={theme.horizontalMargins}>
          <Header />
          <Text style={theme.label}>Digite seu CPF</Text>
          <TextInput
            style={theme.input}
            keyboardType="numeric"
            placeholder="123.456.789-10"
            placeholderTextColor="#161C2660"
            maxLength={14}
            // value={mask.cpf(values.cpf)}
            // onChangeText={handleChange('cpf')}
            // onBlur={handleBlur('cpf')}
          />
          {/* {touched.cpf && errors.cpf && <TextAlert error={errors.cpf} />} */}
          <Text style={theme.label}>Digite sua senha</Text>
          <TextInput
            style={theme.input}
            secureTextEntry={true}
            placeholder="**********"
            placeholderTextColor="#161C2660"
            maxLength={20}
            // onChangeText={handleChange('password')}
            // onBlur={handleBlur('password')}
            // value={values.password}
          />
          {/* {touched.password && errors.password && <TextAlert error={errors.password} />} */}

          <View style={{paddingTop: 15}}>
            <TouchableOpacity
              style={theme.blueButton}
              onPress={() => handleSubmit()}
            >
              <Text style={theme.textButton}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
        <View style={theme.boxFooter}>
          <TouchableOpacity
            onPress={() => navigation.navigate('RecoveryPasswordScreen')}>
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
      </ScrollView>
    </Screen>
  );
}
