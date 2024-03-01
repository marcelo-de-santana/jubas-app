import {theme} from '@styles';
import {Image} from 'react-native';

export function ImageLogo() {
  return (
    <Image
      resizeMode="stretch"
      source={{uri: "https://github.com/marcelo-de-santana/imagioteca/blob/master/jubas-app/images/logo-marca.png?raw=true"}}
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
