import {
  ColorName,
  FontSizeName,
  colors,
  fontSizeRegistry,
  fontAlignType,
} from '@styles';
import {Text as TextRN, TextProps as TextPropsRN} from 'react-native';

export interface TextProps extends TextPropsRN {
  children?: React.ReactNode;
  align?: fontAlignType;
  color?: ColorName;
  size?: FontSizeName;
}

export function Text({
  children,
  style,
  align = 'center',
  color = 'steelBlue',
  size = 'S',
  ...props
}: TextProps) {
  return (
    <TextRN
      style={[
        {
          color: colors[color],
          fontSize: fontSizeRegistry[size],
          textAlign: align        },
          style
        ]}
      {...props}>
      {children}
    </TextRN>
  );
}
