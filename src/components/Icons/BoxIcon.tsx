import {ColorName, colorRegistry} from '@styles';
import {View} from 'react-native';
import {Icon, IconName} from './Icon';

interface BoxProps {
  name: IconName;
  size?: number;
  color?: ColorName;
  backgroundColor?: ColorName;
}

export function BoxIcon({
  name,
  size = 60,
  color = 'black',
  backgroundColor = 'lavenderGray',
}: BoxProps) {
  return (
    <View
      style={{
        padding: 10,
        backgroundColor: colorRegistry[backgroundColor],
        borderRadius: 20,
        alignSelf: 'center',
      }}>
      <Icon name={name} size={size} color={color} />
    </View>
  );
}
