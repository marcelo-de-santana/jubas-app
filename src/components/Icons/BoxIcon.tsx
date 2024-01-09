import {ColorName, colors} from '@styles';
import {View} from 'react-native';
import {Icon, IconName} from './Icon';

interface BoxProps {
  name: IconName;
  size?: number;
  color?: ColorName;
  backgroundColor?: ColorName;
}

/**
 * @description ICON TO LOGO SCREEN
 */
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
        backgroundColor: colors[backgroundColor],
        borderRadius: 20,
        alignSelf: 'center',
      }}>
      <Icon name={name} size={size} color={color} />
    </View>
  );
}
