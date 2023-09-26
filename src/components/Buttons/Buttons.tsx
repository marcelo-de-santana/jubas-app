import {ButtonName, buttonRegistry, ColorName, colorRegistry} from '@styles';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

export interface ButtonOpacityProps extends TouchableOpacityProps {
  color?: ColorName;
  type?: ButtonName;
  children?: React.ReactNode;
}

export function ButtonOpacity({
  color = 'steel-blue',
  type = 'send',
  children,
  ...props
}: ButtonOpacityProps) {
  return (
    <TouchableOpacity
      style={[buttonRegistry[type], {backgroundColor: colorRegistry[color]}]}
      {...props}>
      {children}
    </TouchableOpacity>
  );
}
