import {colorRegistry} from '@styles';
import {Image} from 'react-native';

export function Logo() {
  return (
    <Image
      resizeMode="stretch"
      source={require('../../assets/images/logo-marca.png')}
      style={{
        alignSelf: 'center',
        backgroundColor: colorRegistry['lavenderGray'],
        borderRadius: 20,
        height: 150,
        margin: 20,
        width: 130,
      }}
    />
  );
}
