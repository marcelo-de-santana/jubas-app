import {ColorName, ThemeName, colorRegistry, themeRegistry} from '@styles';
import {TextInput, TextInputProps, View, ViewProps} from 'react-native';

interface InputFormProps {
  children?: React.ReactNode;
  color?: ColorName;
  type?: ThemeName;
  viewProps?: ViewProps;
  inputProps?: TextInputProps[];
}

export function InputForm({
  children,
  type = 'box-modal-form',
  color = 'light-gray',
  viewProps,
  inputProps,
}: InputFormProps) {
  return (
    <View
      style={[themeRegistry[type], {backgroundColor: colorRegistry[color]}]}
      {...viewProps}>
      {inputProps?.map((prop, index) => (
        <TextInput
          key={index}
          autoCapitalize="none"
          placeholderTextColor={colorRegistry['midnight-blue-transparent']}
          style={[
            themeRegistry['input-modal'],
            {
              backgroundColor: colorRegistry['lavender-gray'],
              color: colorRegistry['midnight-blue'],
            },
          ]}
          {...prop}
        />
      ))}
      {children}
    </View>
  );
}
