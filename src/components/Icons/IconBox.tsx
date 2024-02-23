import {View} from 'react-native';
import {Icon, IconName} from './Icon';
import {ThemeColors, theme} from '@styles';

interface IconBoxProps {
  name: IconName;
  size?: number;
  color?: ThemeColors;
  backgroundColor?: ThemeColors;
}

/**
 * @description ICON TO LOGO SCREEN
 */
export function IconBox({
  name,
  size = 60,
  color = 'black',
  backgroundColor = 'lavenderGray',
}: Readonly<IconBoxProps>) {
  return (
    <View
      style={{
        padding: 10,
        backgroundColor: theme.colors[backgroundColor],
        borderRadius: 20,
        alignSelf: 'center',
      }}>
      <Icon name={name} size={size} color={color} />
    </View>
  );
}
