import {ThemeColors, ThemeFontSize, theme} from '@styles';
import {Text as RNText, TextProps as RNTextProps} from 'react-native';

export interface TextProps extends RNTextProps {
  children?: React.ReactNode;
  fontSize?: ThemeFontSize;
  textAlign?: 'auto' | 'justify' | 'center' | 'right' | 'left';
  verticalAlign?: 'auto' | 'top' | 'bottom' | 'middle';
  color?: ThemeColors;
}

export function Text({
  children,
  fontSize = 'S',
  color = 'fontPrimary',
  textAlign = 'center',
  verticalAlign = 'auto',
  ...props
}: Readonly<TextProps>) {
  return (
    <RNText
      style={[
        {
          color: theme.colors[color],
          fontSize: theme.fontSize[fontSize],
          textAlign,
          verticalAlign,
        },
        props.style,
      ]}
      {...props}>
      {children}
    </RNText>
  );
}
