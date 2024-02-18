import { colors } from '@styles';
import {useRef} from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  View,
} from 'react-native';
import { Text } from '../Text/Text';

export interface TextInputProps extends RNTextInputProps {
  label?: string;
  errorMessage?: string;
}

export function TextInput({label, errorMessage, ...props}: Readonly<TextInputProps>) {
  const inputRef = useRef<RNTextInput>(null);

  const $viewTextStyle = {padding: 5};

  const $viewTextInputStyle = {
    borderRadius: 6,
    height: 40,
    borderWidth: errorMessage ? 2 : 1,
    borderColor: colors[errorMessage ? 'red' : 'steelBlue'],
    backgroundColor: colors['lavenderGray'],
  };

  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <Pressable onPress={focusInput}>
      <View style={$viewTextStyle}>
        <Text align="justify" size="S" color="steelBlue">
          {label}
        </Text>
      </View>
      <View style={$viewTextInputStyle}>
        <RNTextInput
          autoCapitalize="none"
          style={$textInputStyle}
          placeholderTextColor={colors['midnightBlueTransparent']}
          cursorColor={colors['midnightBlue']}
          {...props}
        />
      </View>
      {errorMessage && (
        <View style={$viewTextStyle}>
          <Text align="justify" color="red" size="XS">
            {errorMessage}
          </Text>
        </View>
      )}
    </Pressable>
  );
}

const $textInputStyle = {
  paddingHorizontal: 10,
  color: colors['midnightBlue'],
};
