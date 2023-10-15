import {ButtonName, buttonRegistry, ColorName, colorRegistry} from '@styles';
import {TouchableOpacity, TouchableOpacityProps, } from 'react-native';

export interface ButtonProps extends TouchableOpacityProps {
  color?: ColorName;
  type?: ButtonName;
  children?: React.ReactNode;
}

export function Button({
  color = 'steel-blue',
  type = 'send',
  children,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity 
      style={[buttonRegistry[type], {backgroundColor: colorRegistry[color]}]}
      {...props}>
      {children}
    </TouchableOpacity>
  );
}
