import {useRef} from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  View,
} from 'react-native';
import {Text, TextProps} from '../Text/Text';
import {Box, BoxProps} from '../Box';
import {useAppTheme} from '@hooks';

export interface TextInputProps extends RNTextInputProps {
  label?: string;
  labelProps?: TextProps;
  boxTextInputProps?: BoxProps;
  errorMessage?: string;
}

export function TextInput({
  label,
  labelProps,
  boxTextInputProps,
  errorMessage,
  ...props
}: Readonly<TextInputProps>) {
  const {colors, spacing, borderRadii} = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);

  const $boxTextInput: BoxProps = {
    borderRadius: 's6',
    height: 50,
    borderWidth: errorMessage ? 2 : 1,
    borderColor: errorMessage ? 'red' : 'secondary',
    backgroundColor: 'secondary',
  };

  const $textInputStyle = {
    paddingHorizontal: spacing.s10,
    color: colors.secondaryContrast,
  };

  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <Pressable onPress={focusInput}>
      <Box p="s4">
        <Text
          variant="paragraphSmall"
          textAlign="justify"
          color="primaryContrast"
          {...labelProps}>
          {label}
        </Text>
      </Box>
      <Box {...$boxTextInput} {...boxTextInputProps}>
        <RNTextInput
          autoCapitalize="none"
          style={$textInputStyle}
          placeholderTextColor={colors.primaryContrast}
          cursorColor={colors.secondaryContrast}
          {...props}
        />
      </Box>
      {errorMessage && (
        <Box p="s4">
          <Text variant="paragraphVerySmall" textAlign="justify" color="red">
            {errorMessage}
          </Text>
        </Box>
      )}
    </Pressable>
  );
}
