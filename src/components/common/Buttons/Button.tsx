import {Text, TextProps} from '../Text/Text';
import {ActivityIndicator} from '../ActivityIndicator/ActivityIndicator';
import {ButtonName, buttonPreset} from './buttonTypes';
import {
  TouchableOpacity,
  TouchableOpacityProps,
} from '../TouchableOpacity/TouchableOpacity';

export interface ButtonProps extends TouchableOpacityProps {
  type: ButtonName;
  loading?: boolean;
  onPress?: () => void;
  title?: string;
  textProps?: TextProps;
}

export function Button({
  type = 'confirm',
  loading,
  disabled,
  title,
  textProps,
  ...props
}: Readonly<ButtonProps>) {
  const preset = buttonPreset[type];

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={disabled ?? loading}
      {...preset.container}
      {...props}>
      {loading ? (
        <ActivityIndicator color={preset.content.color} size={'small'} />
      ) : (
        <Text
          color={preset.content.color}
          fontSize="XL"
          textAlign="center"
          {...textProps}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}
