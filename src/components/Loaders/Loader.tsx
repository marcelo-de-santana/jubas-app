import {ColorName, colorRegistry} from '@styles';
import {ActivityIndicator} from '../ActivityIndicator';
import {Text} from '../Text';

export function Loader({color = 'steel-blue'}: {color?: ColorName}) {
  return (
    <>
      <ActivityIndicator color={color} />
      <Text color={color}>Carregando...</Text>
    </>
  );
}
