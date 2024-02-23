import {theme} from '@styles';
import {Image} from 'react-native';

export function ImageLogo() {
  return (
    <Image
      resizeMode="stretch"
      source={require('../../assets/images/logo-marca.png')}
      style={{
        alignSelf: 'center',
        backgroundColor: theme.colors['primaryContrast'],
        borderRadius: 20,
        height: 150,
        margin: 20,
        width: 120,
      }}
    />
  );
}
