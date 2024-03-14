import {Image} from 'react-native';

export function ConstructionImage() {
  return (
    <Image
      source={{
        uri: 'https://github.com/marcelo-de-santana/imagioteca/blob/master/jubas-app/images/app-em-construcao.gif?raw=true',
      }}
      style={{
        height: '40%',
        width: 'auto',
      }}
    />
  );
}
