import {Box, Text, TouchableOpacity} from '@components';

export function FooterBox({
  navigateToRecoveryPassword,
  navigateToSignUp,
}: Readonly<{
  navigateToRecoveryPassword: () => void;
  navigateToSignUp: () => void;
}>) {
  return (
    <Box height={200} justifyContent="space-between">
      <TouchableOpacity onPress={navigateToRecoveryPassword}>
        <Text>Esqueci minha senha</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={navigateToSignUp}>
        <Text>Não possui uma conta? Cadastre-se</Text>
      </TouchableOpacity>
    </Box>
  );
}
