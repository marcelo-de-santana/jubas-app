import {themeRegistry} from '@styles';
import {View} from 'react-native';
import {Text} from '../Text';
import {Switch} from '../Switch';

interface SwitchFormProps {
  type?: 'box-switch' | 'box-flex-row';
  title: string;
  value: boolean;
  onValueChange: () => void;
}

export function SwitchForm({
  type = 'box-switch',
  title,
  value,
  onValueChange,
}: SwitchFormProps) {
  return (
    <View style={[themeRegistry[type]]}>
      <Text>{title}</Text>
      <Switch value={value} onValueChange={onValueChange} />
    </View>
  );
}
