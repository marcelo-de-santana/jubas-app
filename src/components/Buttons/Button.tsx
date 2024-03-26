import {Text, TextProps} from '../Text/Text';
import {
  ActivityIndicator,
  ActivityIndicatorProps,
} from '../ActivityIndicator/ActivityIndicator';
import {
  TouchableOpacity,
  TouchableOpacityProps,
} from '../TouchableOpacity/TouchableOpacity';

export interface ButtonProps extends TouchableOpacityProps {
  loading?: boolean;
  onPress?: () => void;
  title?: string;
  indicatorProps?: ActivityIndicatorProps;
  textProps?: TextProps;
}

export function Button({
  children,
  loading,
  disabled,
  title,
  textProps,
  indicatorProps,
  ...props
}: Readonly<ButtonProps>) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={disabled ?? loading}
      backgroundColor="primaryContrast"
      {...props}>
      {loading ? (
        <ActivityIndicator
          color={textProps?.color ?? 'primary'}
          size={'small'}
          {...indicatorProps}
        />
      ) : (
        <Text
          color="primary"
          variant="paragraphVeryLarge"
          textAlign="center"
          {...textProps}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}
