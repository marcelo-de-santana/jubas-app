import {Text, TouchableOpacity} from 'react-native';
import {ButtonProps} from '../Buttons';
import {theme} from '@styles';

export function WhiteItemButton({onPress, title}: ButtonProps) {
  return (
    <TouchableOpacity style={theme.whiteBoxItems} onPress={onPress}>
      <Text style={theme.darkBlueTextSmall}>{title}</Text>
    </TouchableOpacity>
  );
}

export function DarkBlueItemButton({onPress, title}: ButtonProps) {
  return (
    <TouchableOpacity style={theme.blueButton} onPress={onPress}>
      <Text style={theme.darkBlueTextSmall}>{title}</Text>
    </TouchableOpacity>
  );
}
