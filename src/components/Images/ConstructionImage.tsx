import {Image} from 'react-native';

export function ConstructionImage() {
  return (
    <Image
      source={require("../../assets/images/app-em-construcao.gif")}
      style={{
        height: '40%',
        width: 'auto',
      }}
    />
  );
}
