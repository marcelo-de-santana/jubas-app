import {ColorName} from '@styles';
import {ActivityIndicator} from '../ActivityIndicator/ActivityIndicator';
import {Text} from '../Text/Text';

export function Loader({color = 'steelBlue'}: Readonly<{color?: ColorName}>) {
  return (
    <>
      <ActivityIndicator color={color} />
      <Text color={color}>Carregando...</Text>
    </>
  );
}
