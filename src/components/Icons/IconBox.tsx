import {View} from 'react-native';
import {Icon, IconName} from './Icon';
import {ThemeColors} from '@styles';
import {Box} from '../Box';
import {useAppTheme} from '@hooks';

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
  color = 'primary',
  backgroundColor = 'primaryContrast',
}: Readonly<IconBoxProps>) {
  const {colors} = useAppTheme();
  return (
    <Box
      style={{
        padding: 10,
        backgroundColor: colors[backgroundColor],
        borderRadius: 20,
        alignSelf: 'center',
      }}>
      <Icon name={name} size={size} color={color} />
    </Box>
  );
}
