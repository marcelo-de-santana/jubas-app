import {button, text, theme} from '@styles';
import {Text, TouchableOpacity} from 'react-native';

export type ButtonProps = {
  onPress?: () => void;
  title: string;
};

export function BlueButton({onPress, title}: ButtonProps) {
  return (
    <TouchableOpacity style={button.blueButton} onPress={onPress}>
      <Text style={text.whiteTextCenter18}>{title}</Text>
    </TouchableOpacity>
  );
}

export function WhiteButton({onPress, title}: ButtonProps) {
  return (
    <TouchableOpacity style={button.whiteButton} onPress={onPress}>
      <Text style={text.blackTextCenter18}>{title}</Text>
    </TouchableOpacity>
  );
}
