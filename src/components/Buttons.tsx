import {theme} from '@styles';
import {Text, TouchableOpacity} from 'react-native';

export type ButtonProps = {
  onPress?: () => void;
  title: string;
};

export function DarkBlueButton({onPress, title}: ButtonProps) {
  return (
    <TouchableOpacity style={theme.blueButton} onPress={onPress}>
      <Text style={theme.whiteTextButton}>{title}</Text>
    </TouchableOpacity>
  );
}

export function WhiteButton({onPress, title}: ButtonProps) {
  return (
    <TouchableOpacity style={theme.whiteButton} onPress={onPress}>
      <Text style={theme.blackTextButton}>{title}</Text>
    </TouchableOpacity>
  );
}

export function WhiteItemButton({onPress, title}: ButtonProps) {
  return (
    <TouchableOpacity style={theme.whiteBoxItems} onPress={onPress}>
      <Text style={theme.darkBlueTextSmall}>{title}</Text>
    </TouchableOpacity>
  );
}
