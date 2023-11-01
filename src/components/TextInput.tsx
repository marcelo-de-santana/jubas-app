import {colorRegistry, themeRegistry} from '@styles';
import {
  TextInput as TextInputRN,
  TextInputProps as TextInputPropsRN,
} from 'react-native';

interface TextInputProp extends TextInputPropsRN {
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
}

export function TextInput({autoCapitalize = 'none', ...props}: TextInputProp) {
  return (
    <TextInputRN
      autoCapitalize={autoCapitalize}
      placeholderTextColor={colorRegistry['midnight-blue-transparent']}
      style={[
        themeRegistry['input-modal'],
        {
          backgroundColor: colorRegistry['lavender-gray'],
          color: colorRegistry['midnight-blue'],
        },
      ]}
      {...props}
    />
  );
}
