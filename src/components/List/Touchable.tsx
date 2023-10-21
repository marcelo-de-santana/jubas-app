import {ColorName, ThemeName, colorRegistry, theme} from '@styles';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

export interface TouchableProps extends TouchableOpacityProps {
  children?: React.ReactNode;
  type?: ThemeName;
  color?: ColorName;
}

export function Touchable({
  children,
  type = 'box-flex-row',
  color = 'light-gray',
  ...props
}: TouchableProps) {
  return (
    <TouchableOpacity
      style={[theme[type], {backgroundColor: colorRegistry[color]}]}
      {...props}>
      {children}
    </TouchableOpacity>
  );
}
