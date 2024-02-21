import {useRef} from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  View,
} from 'react-native';
import {Text} from '../Text/Text';
import {theme} from '@styles';

export interface TextInputProps extends RNTextInputProps {
  label?: string;
  errorMessage?: string;
}

export function TextInput({
  label,
  errorMessage,
  ...props
}: Readonly<TextInputProps>) {
  const inputRef = useRef<RNTextInput>(null);

  const $viewTextStyle = {padding: 5};

  const $viewTextInputStyle = {
    borderRadius: 6,
    height: 40,
    borderWidth: errorMessage ? 2 : 1,
    borderColor: theme.colors[errorMessage ? 'red' : 'steelBlue'],
    backgroundColor: theme.colors['lavenderGray'],
  };

  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <Pressable onPress={focusInput}>
      <View style={$viewTextStyle}>
        <Text textAlign="justify" color="steelBlue" fontSize={theme.fontSize.S}>
          {label}
        </Text>
      </View>
      <View style={$viewTextInputStyle}>
        <RNTextInput
          autoCapitalize="none"
          style={$textInputStyle}
          placeholderTextColor={theme.colors['midnightBlueTransparent']}
          cursorColor={theme.colors['midnightBlue']}
          {...props}
        />
      </View>
      {errorMessage && (
        <View style={$viewTextStyle}>
          <Text textAlign="justify" color="red" fontSize={theme.fontSize.XS}>
            {errorMessage}
          </Text>
        </View>
      )}
    </Pressable>
  );
}

const $textInputStyle = {
  paddingHorizontal: 10,
  color: theme.colors['midnightBlue'],
};
