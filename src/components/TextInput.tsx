import {useRef} from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  View,
} from 'react-native';
import {Text} from './';
import {colorRegistry} from '@styles';

export interface TextInputProps extends RNTextInputProps {
  label?: string;
  errorMessage?: string;
}

export function TextInput({label, errorMessage, ...props}: TextInputProps) {
  const inputRef = useRef<RNTextInput>(null);

  const $viewTextStyle = {padding: 5};

  const $viewTextInputStyle = {
    borderRadius: 6,
    height: 40,
    borderWidth: errorMessage ? 2 : 1,
    borderColor: colorRegistry[errorMessage ? 'red' : 'steelBlue'],
    backgroundColor: colorRegistry['lavenderGray'],
  };

  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <>
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
            placeholderTextColor={colorRegistry['midnightBlueTransparent']}
            cursorColor={colorRegistry['midnightBlue']}
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
    </>
  );
}

const $textInputStyle = {
  paddingHorizontal: 10,
  color: colorRegistry['midnightBlue'],
};
