import {
  ColorName,
  FontSizeName,
  colorRegistry,
  fontSizeRegistry,
  textAlignType,
} from '@styles';
import {Text, TextProps} from 'react-native';

export interface TextComponentProps extends TextProps {
  children?: React.ReactNode;
  align?: textAlignType;
  color?: ColorName;
  size?: FontSizeName;
}

export function TextComponent({
  children,
  align = 'center',
  color = 'steel-blue',
  size = 'S',
  ...props
}: TextComponentProps) {
  return (
    <Text
      {...props}
      style={{
        color: colorRegistry[color],
        fontSize: fontSizeRegistry[size],
        textAlign: align,
      }}>
      {children}
    </Text>
  );
}
