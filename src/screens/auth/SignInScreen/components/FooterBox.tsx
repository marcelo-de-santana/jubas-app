import {Text} from '@components';
import {TouchableOpacity, View} from 'react-native';

export function FooterBox({
  height = 0,
  navigateToRecoveryPasswordScreen,
  navigateToSignUpScreen,
}: {
  height?: number;
  navigateToRecoveryPasswordScreen: () => void;
  navigateToSignUpScreen: () => void;
}) {
  return (
    <View
      style={{
        height: height * 0.3,
        justifyContent: 'space-between',
        paddingVertical: 10,
      }}>
      <TouchableOpacity onPress={navigateToRecoveryPasswordScreen}>
        <Text>Esqueci minha senha</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={navigateToSignUpScreen}>
        <Text>Não possui uma conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
}
