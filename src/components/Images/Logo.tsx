import {colorRegistry} from '@styles';
import {Image} from 'react-native';

export function Logo({height = 60}: {height?: number}) {
  return (
    <Image
      resizeMode="stretch"
      source={require('../../assets/images/logo-marca.png')}
      style={{
        alignSelf: 'center',
        backgroundColor: colorRegistry['lavender-gray'],
        borderRadius: 20,
        height: height * 0.18,
        margin: 20,
        width: height * 0.14,
      }}
    />
  );
}
