import {
  ColorName,
  FontSizeName,
  colorRegistry,
  fontSizeRegistry,
  textAlignType,
} from '@styles';
import {Text as TextRN, TextProps as TextPropsRN} from 'react-native';

export interface TextProps extends TextPropsRN {
  children?: React.ReactNode;
  align?: textAlignType;
  color?: ColorName;
  size?: FontSizeName;
}

export function Text({
  children,
  align = 'center',
  color = 'steel-blue',
  size = 'S',
  ...props
}: TextProps) {
  return (
    <TextRN
      {...props}
      style={{
        color: colorRegistry[color],
        fontSize: fontSizeRegistry[size],
        textAlign: align,
      }}>
      {children}
    </TextRN>
  );
}