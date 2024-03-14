import {ImageLogo, Text} from '@components';
import {View} from 'react-native';

export function HeaderBox() {
  return (
    <View>
      <Text variant="paragraphVeryLarge">Jubas Barbearia</Text>
      <ImageLogo />
    </View>
  );
}
