import {Pressable, PressableProps, ViewStyle} from 'react-native';
import {ButtonStyleName, ColorName, buttonStyle, colorRegistry} from '@styles';
import {Text, TextProps} from '../Text';
import {ActivityIndicator} from '../ActivityIndicator';

export interface ButtonProps {
  type?: ButtonStyleName;
  backgroundColor?: ColorName;
  style?: ViewStyle;
  loading?: boolean;
  disabled?: boolean;
  onPress?: () => void;
  title?: string;
  textProps?: TextProps;
}

export function Button({
  type,
  backgroundColor,
  style,
  loading,
  disabled,
  onPress,
  title,
  textProps,
}: ButtonProps) {
  const $buttonType = type && buttonStyle[type];
  const $buttonStyle = {
    backgroundColor: backgroundColor && colorRegistry[backgroundColor],
    ...style,
  };
  const disable = disabled || loading;

  return (
    <Pressable
      style={[$buttonType, $buttonStyle]}
      onPress={onPress}
      disabled={disable}>
      {loading ? (
        <ActivityIndicator color={textProps?.color ?? 'white'} size={'small'} />
      ) : (
        <Text align="center" {...textProps}>
          {title}
        </Text>
      )}
    </Pressable>
  );
}
