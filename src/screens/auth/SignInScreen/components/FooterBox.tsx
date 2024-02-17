import {Text} from '@components';
import {TouchableOpacity, View} from 'react-native';

export function FooterBox({
  navigateToRecoveryPassword,
  navigateToSignUp,
}: Readonly<{
  navigateToRecoveryPassword: () => void;
  navigateToSignUp: () => void;
}>) {
  return (
    <View
      style={{
        height: 200,
        marginVertical: 20,
        justifyContent: 'space-between',
      }}>
      <TouchableOpacity onPress={navigateToRecoveryPassword}>
        <Text>Esqueci minha senha</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={navigateToSignUp}>
        <Text>Não possui uma conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
}
