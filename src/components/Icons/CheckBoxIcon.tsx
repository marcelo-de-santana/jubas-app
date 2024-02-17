import {View} from 'react-native';
import {Text} from '../Text/Text';
import {Icon, IconName} from './Icon';

interface CheckBoxIconProps {
  label?: string;
  value?: boolean;
  onPress?: () => void;
}

/**
 *
 * @description Check box icon
 * @params {label?: string; value?: boolean}
 */

export function CheckBoxIcon({label, value, onPress}: CheckBoxIconProps) {
  const iconName: IconName = value ? 'CheckBoxChecked' : 'CheckBoxBlank';

  return (
    <View
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
      }}>
      <Text>{label}</Text>
      <Icon name={iconName} size={30} onPress={onPress} />
    </View>
  );
}
