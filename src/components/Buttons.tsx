import {theme} from '@styles';
import {Text, TouchableOpacity} from 'react-native';

export type DarkBlueButtonProps = {
  onPress: () => void;
  title: string;
};

export function DarkBlueButton({onPress, title}: DarkBlueButtonProps) {
  return (
    <TouchableOpacity style={theme.blueButton} onPress={onPress}>
      <Text style={theme.textButton}>{title}</Text>
    </TouchableOpacity>
  );
}
