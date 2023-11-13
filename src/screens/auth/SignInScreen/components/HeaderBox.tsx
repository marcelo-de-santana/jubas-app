import {Logo, Text} from '@components';
import {View} from 'react-native';

export function HeaderBox() {
  return (
    <View>
      <Text size="XL">Jubas Barbearia</Text>
      <Logo />
    </View>
  );
}
