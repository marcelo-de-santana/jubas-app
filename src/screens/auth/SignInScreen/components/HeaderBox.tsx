import {Logo, Text} from '@components';
import {View} from 'react-native';

export function HeaderBox({height}: {height?: number}) {
  return (
    <View style={{paddingVertical: 10}}>
      <Text size="XL">Jubas Barbearia</Text>
      <Logo height={height} />
    </View>
  );
}
