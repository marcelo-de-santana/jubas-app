import {ImageLogo, Text} from '@components';
import {View} from 'react-native';

export function HeaderBox() {
  return (
    <View>
      <Text size="XL">Jubas Barbearia</Text>
      <ImageLogo />
    </View>
  );
}
