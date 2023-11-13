import {View} from 'react-native';
import {Text} from '../Text';
import {Icon, IconName} from './Icon';

interface CheckBoxIconProps {
  label?: string;
  value?: boolean;
  onPress?: () => void;
}

export function CheckBoxIcon({label, value, onPress}: CheckBoxIconProps) {
  const iconName: IconName = value ? 'CheckBoxChecked' : 'CheckBoxBlank';

  return (
    <View
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 5,
        marginVertical: 5,
      }}>
      <Text>{label}</Text>
      <Icon name={iconName} size={30} onPress={onPress} />
    </View>
  );
}
