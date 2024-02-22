import {Text, TextProps} from '../Text/Text';
import {
  TouchableOpacity,
  TouchableOpacityProps,
} from '../TouchableOpacity/TouchableOpacity';

export interface BoxItemProps extends TouchableOpacityProps {
  children?: React.ReactNode;
  label?: string;
  textProps?: TextProps;
}

// use only if you are going to use the label
export function BoxItem({
  children,
  label,
  textProps,
  ...props
}: Readonly<BoxItemProps>) {
  return (
    <TouchableOpacity justifyContent="center" {...props}>
      <Text variant="paragraphSmall" {...textProps}>
        {label}
      </Text>
      {children}
    </TouchableOpacity>
  );
}
