import {Text, TextProps} from '../Text/Text';
import {TouchableOpacity, TouchableOpacityProps} from './TouchableOpacity';

export interface TouchableOpacityItemPros extends TouchableOpacityProps {
  children?: React.ReactNode;
  label?: any;
  textProps?: TextProps;
}

export function TouchableOpacityItem({
  children,
  label,
  textProps,
  ...props
}: Readonly<TouchableOpacityItemPros>) {
  return (
    <TouchableOpacity {...props}>
      <Text variant="paragraphSmall" {...textProps}>
        {label}
      </Text>
      {children}
    </TouchableOpacity>
  );
}
