import {Text, TextProps} from '../';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

export interface BoxItemProps extends TouchableOpacityProps {
  children?: React.ReactNode;
  label?: string;
  textProps?: TextProps;
}

// use only if you are going to use the label
export function BoxItem({children, label, textProps, ...props}: BoxItemProps) {
  return (
    <TouchableOpacity style={{justifyContent: 'center'}} {...props}>
      <Text size="S" align="justify" {...textProps}>
        {label}
      </Text>
      {children}
    </TouchableOpacity>
  );
}
