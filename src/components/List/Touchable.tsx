import {ColorName, ThemeName, colorRegistry, themeRegistry} from '@styles';
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
      style={[themeRegistry[type], {backgroundColor: colorRegistry[color]}]}
      {...props}>
      {children}
    </TouchableOpacity>
  );
}
