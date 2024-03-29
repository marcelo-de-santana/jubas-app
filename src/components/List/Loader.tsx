import {ThemeColors} from '@styles';
import {ActivityIndicator} from '../ActivityIndicator/ActivityIndicator';
import {Text} from '../Text/Text';

export function Loader({
  color = 'primaryContrast',
}: Readonly<{color?: ThemeColors}>) {
  return (
    <>
      <ActivityIndicator color={color} />
      <Text color={color}>Carregando...</Text>
    </>
  );
}
