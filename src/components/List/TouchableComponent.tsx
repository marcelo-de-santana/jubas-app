import {ColorName, ThemeName, colorRegistry, themeRegistry} from '@styles';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

export interface TouchableComponentProps extends TouchableOpacityProps {
  children?: React.ReactNode;
  type?: ThemeName;
  color?: ColorName;
}

export function TouchableComponent({
  children,
  type = 'box-flex-row',
  color = 'light-gray',
  ...props
}: TouchableComponentProps) {
  return (
    <TouchableOpacity
      style={[themeRegistry[type], {backgroundColor: colorRegistry[color]}]}
      {...props}>
      {children}
    </TouchableOpacity>
  );
}
