import {colorRegistry, themeRegistry} from '@styles';
import {
  Pressable,
  PressableProps,
  SafeAreaView,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
interface FormModalProps {
  children?: React.ReactNode;
  pressableProps?: PressableProps;
  inputProps?: TextInputProps[];
}

export function FormModal({
  children,
  pressableProps,
  inputProps,
}: FormModalProps) {
  return (
    <SafeAreaView
      style={[
        themeRegistry.container,
        {backgroundColor: colorRegistry['black-transparent']},
      ]}>
      <Pressable style={[themeRegistry.container]} {...pressableProps} />
      <View
        style={[
          themeRegistry['box-modal-form'],
          {backgroundColor: colorRegistry['light-gray']},
        ]}>
        {inputProps?.map((prop, index) => (
          <TextInput
            key={index}
            {...prop}
            autoCapitalize={prop?.autoCapitalize ?? 'none'}
            placeholderTextColor={
              prop?.placeholderTextColor ??
              colorRegistry['midnight-blue-transparent']
            }
            style={[
              themeRegistry['input-modal'],
              {
                backgroundColor: colorRegistry['lavender-gray'],
                color: colorRegistry['midnight-blue'],
              },
            ]}
          />
        ))}
        {children}
      </View>
    </SafeAreaView>
  );
}
