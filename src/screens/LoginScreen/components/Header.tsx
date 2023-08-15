import {theme} from '@styles';
import {Image, Text, View} from 'react-native';

export function Header() {
  return (
    <View style={{alignItems: 'center', paddingVertical: '15%'}}>
      <Text style={theme.blackTextLarge}>Juba's Barbearia</Text>
      <Image
        style={theme.logo}
        source={require('../../../assets/images/logoMarca.png')}
      />
      {/* {errorMessage && <Text style={{ fontSize: 14, color: 'red', paddingVertical: 5 }}>{errorMessage}</Text>} */}
    </View>
  );
}
